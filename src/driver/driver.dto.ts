import { PaginateResult, Types } from 'mongoose';
import { Driver } from './driver.schema';
import {
  LangPriority,
  PaginatedResultDto,
  PersonType,
  Query,
} from '../utils/general.dto';
import { OwnerResultDto } from '../owner/owner.dto';
import { TruckResultDto } from '../truck/truck.dto';

export interface CreateDriverDto {
  readonly fullName: string;
  readonly birthDate?: Date;
  readonly citizenship?: string;
  readonly languagePriority?: LangPriority;
  readonly driverLicenceNumber: string;
  readonly driverLicenceState: string;
  readonly driverLicenceExp: Date;
  readonly idDocId?: string;
  readonly idDocType?: string;
  readonly idDocExp?: Date;
  readonly hiredBy?: string;
  readonly hireDate?: Date;
  readonly address?: string;
  readonly phone: string;
  readonly phone2?: string;
  readonly email?: string;
  readonly emergencyContactName?: string;
  readonly emergencyContactRel?: string;
  readonly emergencyContactPhone?: string;
  readonly notes?: string;
  readonly appLogin?: string;
  readonly appPass?: string;
  readonly owner: Types.ObjectId;
}

export type UpdateDriverDto = Partial<CreateDriverDto>;

export interface DriverQuerySearch {
  readonly search?: string;
  readonly fullName?: string;
  readonly citizenship?: string;
  readonly languagePriority?: LangPriority;
  readonly driverLicenceNumber?: string;
  readonly driverLicenceState?: string;
  readonly idDocId?: string;
  readonly idDocType?: string;
  readonly hiredBy?: string;
  readonly address?: string;
  readonly allPhone?: string;
  readonly phone?: string;
  readonly phone2?: string;
  readonly email?: string;
  readonly emergencyContactName?: string;
  readonly emergencyContactRel?: string;
  readonly emergencyContactPhone?: string;
  readonly appLogin?: string;
  readonly truckNumber?: number;
  readonly owner?: Types.ObjectId;
}

export interface DriverQueryOrder
  extends Omit<
    DriverQuerySearch,
    'search' | 'allPhone' | 'truckNumber' | 'owner'
  > {
  readonly birthDate?: Date;
  readonly driverLicenceExp?: Date;
  readonly idDocExp?: Date;
  readonly hireDate?: Date;
}

export interface DriverQuery
  extends Query<DriverQuerySearch, DriverQueryOrder> {}

export class DriverResultDto {
  static fromDriverModel(driver: Driver): DriverResultDto {
    const owner = driver.owner && OwnerResultDto.fromOwnerModel(driver.owner);
    const driveTrucks =
      driver.driveTrucks &&
      driver.driveTrucks.length > 0 &&
      driver.driveTrucks.map((truck) => TruckResultDto.fromTruckModel(truck));
    let result: DriverResultDto = {
      id: driver._id,
      type: driver.type,
      fullName: driver.fullName,
      birthDate: driver.birthDate,
      citizenship: driver.citizenship,
      languagePriority: driver.languagePriority,
      driverLicenceNumber: driver.driverLicenceNumber,
      driverLicenceState: driver.driverLicenceState,
      driverLicenceExp: driver.driverLicenceExp,
      idDocId: driver.idDocId,
      idDocType: driver.idDocType,
      idDocExp: driver.idDocExp,
      hiredBy: driver.hiredBy,
      hireDate: driver.hireDate,
      address: driver.address,
      phone: driver.phone,
      phone2: driver.phone2,
      email: driver.email,
      emergencyContactName: driver.emergencyContactName,
      emergencyContactRel: driver.emergencyContactRel,
      emergencyContactPhone: driver.emergencyContactPhone,
      notes: driver.notes,
      appLogin: driver.appLogin,
    };
    if (owner) {
      result = { ...result, owner };
    }
    if (driveTrucks) {
      result = { ...result, driveTrucks };
    }
    return result;
  }

  readonly id: Types.ObjectId;
  readonly type: PersonType;
  readonly fullName: string;
  readonly birthDate?: Date;
  readonly citizenship?: string;
  readonly languagePriority?: LangPriority;
  readonly driverLicenceNumber: string;
  readonly driverLicenceState: string;
  readonly driverLicenceExp: Date;
  readonly idDocId?: string;
  readonly idDocType?: string;
  readonly idDocExp?: Date;
  readonly hiredBy?: string;
  readonly hireDate?: Date;
  readonly address?: string;
  readonly phone: string;
  readonly phone2?: string;
  readonly email?: string;
  readonly emergencyContactName?: string;
  readonly emergencyContactRel?: string;
  readonly emergencyContactPhone?: string;
  readonly notes?: string;
  readonly appLogin?: string;
  readonly owner?: OwnerResultDto;
  readonly driveTrucks?: TruckResultDto[];
}

export class PaginatedDriverResultDto extends PaginatedResultDto<DriverResultDto> {
  static from(
    paginatedDrivers: PaginateResult<Driver>,
  ): PaginatedDriverResultDto {
    return {
      items: paginatedDrivers.docs.map((driver) =>
        DriverResultDto.fromDriverModel(driver),
      ),
      offset: paginatedDrivers.offset,
      limit: paginatedDrivers.limit,
      total: paginatedDrivers.totalDocs,
    };
  }
}
