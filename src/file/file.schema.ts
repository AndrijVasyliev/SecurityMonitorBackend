import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';

import { FILE_OF_TYPES, MONGO_FILE_BUCKET_NAME } from '../utils/constants';
import { TruckDocument } from '../truck/truck.schema';
import { PersonDocument } from '../person/person.schema';
import { LoadDocument } from '../load/load.schema';
import { FileOfType } from '../utils/general.dto';
import { UserDocument } from '../user/user.schema';

export type FileDocument = File & Document;

@Schema({
  _id: false,
  timestamps: false,
})
export class Metadata {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  @Prop({
    required: true,
    type: MongooseSchema.Types.ObjectId,
    // ref: 'Person',
    ref: function () {
      return function () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        return (this as any as Metadata).fileOf;
      };
      /*return new Proxy(
        function () {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          return (this as any as Metadata).fileOf;
        },
        {
          get(target, prop, receiver) {
            if (prop === 'name' && !count) {
              count++;
              return null;
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return target[prop];
          },
        },
      );*/
    },
    // refPath: 'metadata.fileOf',
    /*refPath: function () {
      //  return 'Person';
      return this.fileOf;
    },*/
    /*switch ((this as Metadata).fileOf) {
        case 'Truck':
          return 'Truck';
        case 'Person':
          return 'Person';
        case 'Load_Bill':
        case 'Load_Rate':
          return 'Load';
        default:
          return 'User';
      }*/
    // },
    // Don`t need this as default
    // autopopulate: true,
  })
  linkedTo: TruckDocument | PersonDocument | LoadDocument | UserDocument;

  @Prop({
    required: true,
    type: String,
    enum: FILE_OF_TYPES,
  })
  fileOf: FileOfType;

  @Prop({ required: true, immutable: true })
  contentType: string;

  @Prop({ required: false, type: MongooseSchema.Types.Map, of: String })
  tags: Map<string, string>;

  @Prop({ required: false })
  comment: string;
}

export const MetadataSchema = SchemaFactory.createForClass(Metadata);
MetadataSchema.index({ linkedTo: 1 });
MetadataSchema.index({ fileOf: 1 });
MetadataSchema.index({ 'tags.$**': 1 });
MetadataSchema.index({ comment: 1 }, { sparse: true });

@Schema({
  timestamps: { createdAt: 'uploadDate', updatedAt: false },
  optimisticConcurrency: true,
  collection: `${MONGO_FILE_BUCKET_NAME}.files`,
})
export class File {
  @Prop({ required: true })
  filename: string;

  @Prop({ required: true })
  length: number;

  @Prop({
    required: true,
    immutable: true,
    type: MetadataSchema,
  })
  metadata: Metadata & Document;

  uploadDate: Date;

  _id: Types.ObjectId;

  readonly id: string;
}

export const FileSchema = SchemaFactory.createForClass(File);

FileSchema.index({ uploadDate: 1 });
FileSchema.index({ filename: 1 });
