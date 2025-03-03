import { PaginateResult, Types } from 'mongoose';
import { Coordinator } from './coordinator.schema';
import {
  LangPriority,
  PaginatedResultDto,
  PersonType,
  Query,
} from '../utils/general.dto';
import { OwnerResultDto } from '../owner/owner.dto';
import { TruckResultDto } from '../truck/truck.dto';

export interface CreateCoordinatorDto {
  readonly fullName: string;
  readonly birthDate: Date;
  readonly citizenship: string;
  readonly languagePriority: LangPriority;
  readonly hiredBy: string;
  readonly hireDate: Date;
  readonly snn: string;
  readonly company?: string;
  readonly insurancePolicy: string;
  readonly insurancePolicyExp: Date;
  readonly address: string;
  readonly phone: string;
  readonly phone2?: string;
  readonly email: string;
  readonly emergencyContactName: string;
  readonly emergencyContactRel?: string;
  readonly emergencyContactPhone: string;
  readonly notes?: string;
  readonly appLogin?: string;
  readonly appPass?: string;
  readonly owner: Types.ObjectId;
}

export type UpdateCoordinatorDto = Partial<CreateCoordinatorDto>;

export interface CoordinatorQuerySearch {
  readonly search?: string;
  readonly fullName?: string;
  readonly citizenship?: string;
  readonly languagePriority?: LangPriority;
  readonly hiredBy?: string;
  readonly snn?: string;
  readonly company?: string;
  readonly insurancePolicy?: string;
  readonly address?: string;
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

export interface CoordinatorQueryOrder
  extends Omit<CoordinatorQuerySearch, 'search' | 'truckNumber' | 'owner'> {
  readonly birthDate?: Date;
  readonly hireDate?: Date;
  readonly insurancePolicyExp?: Date;
}

export interface CoordinatorQuery
  extends Query<CoordinatorQuerySearch, CoordinatorQueryOrder> {}

export class CoordinatorResultDto {
  static fromCoordinatorModel(coordinator: Coordinator): CoordinatorResultDto {
    const owner =
      coordinator.owner && OwnerResultDto.fromOwnerModel(coordinator.owner);
    const coordinateTrucks =
      coordinator.coordinateTrucks &&
      coordinator.coordinateTrucks.length > 0 &&
      coordinator.coordinateTrucks.map((truck) =>
        TruckResultDto.fromTruckModel(truck),
      );
    let result: CoordinatorResultDto = {
      id: coordinator._id,
      type: coordinator.type,
      fullName: coordinator.fullName,
      birthDate: coordinator.birthDate,
      citizenship: coordinator.citizenship,
      languagePriority: coordinator.languagePriority,
      hiredBy: coordinator.hiredBy,
      hireDate: coordinator.hireDate,
      snn: coordinator.snn,
      company: coordinator.company,
      insurancePolicy: coordinator.insurancePolicy,
      insurancePolicyExp: coordinator.insurancePolicyExp,
      address: coordinator.address,
      phone: coordinator.phone,
      phone2: coordinator.phone2,
      email: coordinator.email,
      emergencyContactName: coordinator.emergencyContactName,
      emergencyContactRel: coordinator.emergencyContactRel,
      emergencyContactPhone: coordinator.emergencyContactPhone,
      notes: coordinator.notes,
      appLogin: coordinator.appLogin,
    };
    if (owner) {
      result = { ...result, owner };
    }
    if (coordinateTrucks) {
      result = { ...result, coordinateTrucks };
    }
    return result;
  }

  readonly id: Types.ObjectId;
  readonly type: PersonType;
  readonly fullName: string;
  readonly birthDate: Date;
  readonly citizenship: string;
  readonly languagePriority: LangPriority;
  readonly hiredBy: string;
  readonly hireDate: Date;
  readonly snn: string;
  readonly company?: string;
  readonly insurancePolicy: string;
  readonly insurancePolicyExp: Date;
  readonly address: string;
  readonly phone: string;
  readonly phone2?: string;
  readonly email: string;
  readonly emergencyContactName: string;
  readonly emergencyContactRel?: string;
  readonly emergencyContactPhone: string;
  readonly notes?: string;
  readonly appLogin?: string;
  readonly owner?: OwnerResultDto;
  readonly coordinateTrucks?: TruckResultDto[];
}

export class PaginatedCoordinatorResultDto extends PaginatedResultDto<CoordinatorResultDto> {
  static from(
    paginatedCoordinators: PaginateResult<Coordinator>,
  ): PaginatedCoordinatorResultDto {
    return {
      items: paginatedCoordinators.docs.map((coordinator) =>
        CoordinatorResultDto.fromCoordinatorModel(coordinator),
      ),
      offset: paginatedCoordinators.offset,
      limit: paginatedCoordinators.limit,
      total: paginatedCoordinators.totalDocs,
    };
  }
}
