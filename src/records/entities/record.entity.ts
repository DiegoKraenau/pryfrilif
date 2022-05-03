import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type RecordDocument = Record & Document;

@Schema({ collection: 'records' })
export class Record {
  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true, type: mongoose.Schema.Types.Mixed })
  form: any;
}

export const RecordSchema = SchemaFactory.createForClass(Record);
