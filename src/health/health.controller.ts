import * as fs from 'node:fs';
import { connection } from 'mongoose';
import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectConnection } from '@nestjs/mongoose';
import {
  HealthCheck,
  HealthCheckService,
  MemoryHealthIndicator,
} from '@nestjs/terminus';
import { MongooseHealthIndicator } from './mongoose.healthIndicator';
import {
  HEALTH_MEMORY_HEAP_LIMIT,
  HEALTH_MEMORY_RSS_LIMIT,
  MONGO_CONNECTION_NAME,
  DB_CHECK_TIMEOUT,
} from '../utils/constants';

import { LoggerService } from '../logger';
import { EmailService } from '../email/email.service';
import { Public } from '../auth/auth.decorator';
import { DoNotCollectMetrics } from '../metrics/metrics.decorator';
import * as pjs from '../../package.json';

function getVersionFromStatusFile() {
  try {
    return fs.readFileSync('status.json').toString();
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

const fileVersion = getVersionFromStatusFile();

@Controller()
@Public()
@DoNotCollectMetrics()
export class HealthController {
  readonly heapLimit: number;
  readonly rssLimit: number;
  constructor(
    private readonly health: HealthCheckService,
    private readonly memory: MemoryHealthIndicator,
    private readonly mongoose: MongooseHealthIndicator,
    private readonly email: EmailService,
    private readonly configService: ConfigService,
    private readonly log: LoggerService,
    @InjectConnection(MONGO_CONNECTION_NAME)
    private mongoConnection: typeof connection,
  ) {
    this.heapLimit =
      this.configService.get<number>('app.heapLimit') ||
      HEALTH_MEMORY_HEAP_LIMIT;
    this.rssLimit =
      this.configService.get<number>('app.rssLimit') || HEALTH_MEMORY_RSS_LIMIT;
  }

  @Get('/liveness')
  checkLiveness() {
    this.log.silly('Liveness check');
    return 'OK';
  }

  @Get('/readiness')
  async checkReadiness() {
    const healthCheckResult = await this.health.check([
      () => this.memory.checkHeap('memory_heap', this.heapLimit),
      () => this.memory.checkRSS('memory_rss', this.rssLimit),
      // async () => this.email.checkConnectivity('email'), Dont need service to be restarted, when it is not able to sent emails
      async () =>
        this.mongoose.pingCheck('mongoose', {
          connection: this.mongoConnection,
          timeout: DB_CHECK_TIMEOUT,
        }),
    ]);
    this.log.silly(`Readiness check ${JSON.stringify(healthCheckResult)}`);
    if (healthCheckResult.status === 'ok') {
      return 'OK';
    }
    throw new InternalServerErrorException('Service not ready');
  }

  @Get('/status')
  getStatus() {
    let result = '# GET current build/version number\nbuild_info';
    if (fileVersion) {
      result += fileVersion;
    } else {
      result += `{version=${pjs.version}}`;
    }
    this.log.silly(`Status ${result}`);
    return result;
  }

  @Get('/health')
  @HealthCheck()
  async check() {
    const healthCheckResult = this.health.check([
      () => this.memory.checkHeap('memory_heap', this.heapLimit),
      () => this.memory.checkRSS('memory_rss', this.rssLimit),
      async () => this.email.checkConnectivity('email'),
      async () =>
        this.mongoose.pingCheck('mongoose', {
          connection: this.mongoConnection,
          timeout: DB_CHECK_TIMEOUT,
        }),
    ]);
    this.log.silly(`Health check ${JSON.stringify(healthCheckResult)}`);
    return healthCheckResult;
  }
}
