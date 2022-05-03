import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GlobalFormDocument = GlobalForm & Document;

@Schema({ collection: 'globalforms' })
export class GlobalForm {
  @Prop({ default: 'GLOBAL_FORM' })
  code: string;

  @Prop({ required: true })
  categories: any[];
}

export const GlobalFormSchema = SchemaFactory.createForClass(GlobalForm);
