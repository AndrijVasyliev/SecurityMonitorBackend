import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import {
  LANG_PRIORITIES,
  PERSON_TYPES,
  COORDINATOR_TYPES,
  DRIVER_TYPES,
} from '../utils/constants';
import { LangPriority, PersonType } from '../utils/general.dto';
import { hash } from '../utils/hash';
import { TruckDocument } from '../truck/truck.schema';
import { DriverDocument } from '../driver/driver.schema';
import { CoordinatorDocument } from '../coordinator/coordinator.schema';

export type OwnerDocument = Owner & Document;

@Schema({
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  optimisticConcurrency: true,
  collection: 'persons',
})
export class Owner {
  @Prop({
    required: true,
    immutable: true,
    type: String,
    enum: PERSON_TYPES,
    default: 'Owner',
  })
  type: PersonType;

  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true })
  birthDate: Date;

  @Prop({ required: true })
  citizenship: string;

  @Prop({ required: true, type: String, enum: LANG_PRIORITIES })
  languagePriority: LangPriority;

  @Prop({ required: true })
  hiredBy: string;

  @Prop({ required: true })
  hireDate: Date;

  @Prop({ required: true })
  snn: string;

  @Prop({ required: false })
  company?: string;

  @Prop({ required: true })
  insurancePolicy: string;

  @Prop({ required: true })
  insurancePolicyExp: Date;

  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: false })
  phone2?: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: false })
  emergencyContactName: string;

  @Prop({ required: false })
  emergencyContactRel?: string;

  @Prop({ required: false })
  emergencyContactPhone: string;

  @Prop({ required: false })
  notes?: string;

  @Prop({ required: false })
  appLogin?: string;

  @Prop({
    required: false,
    set: hash,
  })
  appPass?: string;

  readonly ownTrucks?: TruckDocument[];
  readonly coordinators?: CoordinatorDocument[];
  readonly drivers?: DriverDocument[];

  created_at: Date;

  updated_at: Date;

  _id: Types.ObjectId;

  readonly id: string;
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);

OwnerSchema.virtual('ownTrucks', {
  ref: 'Truck',
  localField: '_id',
  foreignField: 'owner',
  options: { sort: { truckNumber: 1 } },
});

OwnerSchema.virtual('coordinators', {
  ref: 'Coordinator',
  localField: '_id',
  foreignField: 'owner',
  match: { type: { $in: COORDINATOR_TYPES } },
  options: { sort: { fullName: 1 } },
});

OwnerSchema.virtual('drivers', {
  ref: 'Driver',
  localField: '_id',
  foreignField: 'owner',
  match: { type: { $in: DRIVER_TYPES } },
  options: { sort: { fullName: 1 } },
});

OwnerSchema.index({ appLogin: 1 }, { unique: true, sparse: true });
