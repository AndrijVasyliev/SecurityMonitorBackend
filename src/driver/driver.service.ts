import { PaginateModel, PaginateOptions, Types } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Driver, DriverDocument } from './driver.schema';
import {
  CreateDriverDto,
  DriverQuery,
  DriverResultDto,
  PaginatedDriverResultDto,
  UpdateDriverDto,
} from './driver.dto';
import { LoggerService } from '../logger';
import { DRIVER_TYPES, MONGO_CONNECTION_NAME } from '../utils/constants';
import { TruckService } from '../truck/truck.service';
import { escapeForRegExp } from '../utils/escapeForRegExp';

@Injectable()
export class DriverService {
  constructor(
    @InjectModel(Driver.name, MONGO_CONNECTION_NAME)
    private readonly driverModel: PaginateModel<DriverDocument>,
    private readonly truckService: TruckService,
    private readonly log: LoggerService,
  ) {}

  private async findDriverDocumentById(
    id: Types.ObjectId,
  ): Promise<DriverDocument> {
    this.log.debug(`Searching for Driver ${id}`);
    const driver = await this.driverModel
      .findOne({
        _id: id,
        type: { $in: DRIVER_TYPES },
      })
      .populate('driveTrucks');
    if (!driver) {
      throw new NotFoundException(`Driver ${id} was not found`);
    }
    this.log.debug(`Driver ${driver._id}`);
    return driver;
  }

  async findDriverById(id: Types.ObjectId): Promise<DriverResultDto> {
    const driver = await this.findDriverDocumentById(id);
    return DriverResultDto.fromDriverModel(driver);
  }

  async getDrivers(query: DriverQuery): Promise<PaginatedDriverResultDto> {
    this.log.debug(`Searching for Drivers: ${JSON.stringify(query)}`);

    const documentQuery: Parameters<typeof this.driverModel.paginate>[0] = {};
    if (query.search) {
      const searchParams = Object.entries(query.search);
      searchParams.forEach((entry) => {
        entry[0] !== 'search' &&
          entry[0] !== 'owner' &&
          entry[0] !== 'truckNumber' &&
          entry[0] !== 'allPhone' &&
          (documentQuery[entry[0]] = {
            $regex: new RegExp(escapeForRegExp(entry[1]), 'i'),
          });
      });
    }
    if (query?.search?.owner) {
      documentQuery.owner = {
        $eq: query.search.owner,
      };
    }
    if (query?.search?.truckNumber) {
      const truck = await this.truckService.findTruckByNumber(
        query.search.truckNumber,
      );
      const { owner, coordinator, driver } = truck;
      const conditions = [];
      if (owner) {
        conditions.push({ _id: owner.id });
      }
      if (coordinator) {
        conditions.push({ _id: coordinator.id });
      }
      if (driver) {
        conditions.push({ _id: driver.id });
      }
      if (conditions.length === 1) {
        Object.assign(documentQuery, conditions[0]);
      }
      if (conditions.length > 1) {
        documentQuery.$or = conditions;
      }
    }
    if (query?.search?.search) {
      const search = escapeForRegExp(query?.search?.search);
      documentQuery.$or = [
        ...(documentQuery.$or ? documentQuery.$or : []),
        { fullName: { $regex: new RegExp(search, 'i') } },
        { phone: { $regex: new RegExp(search, 'i') } },
        { phone2: { $regex: new RegExp(search, 'i') } },
        { email: { $regex: new RegExp(search, 'i') } },
      ];
    }
    if (query?.search?.allPhone) {
      const phone = escapeForRegExp(query?.search?.allPhone);
      documentQuery.$or = [
        ...(documentQuery.$or ? documentQuery.$or : []),
        { phone: { $regex: new RegExp(phone, 'i') } },
        { phone2: { $regex: new RegExp(phone, 'i') } },
      ];
    }

    const options: PaginateOptions = {
      limit: query.limit,
      offset: query.offset,
    };
    if (query.direction && query.orderby) {
      options.sort = { [query.orderby]: query.direction };
    }
    options.populate = ['driveTrucks'];
    documentQuery.type = { $in: DRIVER_TYPES };
    const res = await this.driverModel.paginate(documentQuery, options);

    return PaginatedDriverResultDto.from(res);
  }

  async createDriver(
    createDriverDto: CreateDriverDto,
  ): Promise<DriverResultDto> {
    this.log.debug(`Creating new Driver: ${JSON.stringify(createDriverDto)}`);
    const createdDriver = new this.driverModel(createDriverDto);

    this.log.debug('Saving Driver');
    const driver = await createdDriver.save();

    return DriverResultDto.fromDriverModel(driver);
  }

  async updateDriver(
    id: Types.ObjectId,
    updateDriverDto: UpdateDriverDto,
  ): Promise<DriverResultDto> {
    const driver = await this.findDriverDocumentById(id);
    this.log.debug(`Setting new values: ${JSON.stringify(updateDriverDto)}`);
    Object.assign(driver, updateDriverDto);
    this.log.debug('Saving Driver');
    const savedDriver = await driver.save();
    this.log.debug(`Driver ${savedDriver._id} saved`);

    return DriverResultDto.fromDriverModel(driver);
  }

  async deleteDriver(id: Types.ObjectId): Promise<DriverResultDto> {
    const driver = await this.findDriverDocumentById(id);

    this.log.debug(`Deleting Driver ${driver._id}`);

    await driver.deleteOne();
    this.log.debug('Driver deleted');

    return DriverResultDto.fromDriverModel(driver);
  }
}
