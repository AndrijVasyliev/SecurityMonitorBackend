import { ConfigurableModuleBuilder } from '@nestjs/common';
import { LoggerModuleOptions } from './logger.interface';

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<LoggerModuleOptions>().build();
