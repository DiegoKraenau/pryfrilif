import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Record, RecordDocument } from './entities/record.entity';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(Record.name)
    private recordModel: Model<RecordDocument>,
  ) {}

  async registerRecord(userId: string, date: string, form: any) {
    const created = new this.recordModel({
      userId,
      date,
      form,
    });

    return await created.save();
  }

  async getRecordsByUserId(userId: string) {
    const records = await this.recordModel.find({ userId }).exec();
    records.forEach((x) => {
      x.form?.categories?.forEach((y) => {
        y?.subcategories.forEach((z) => {
          let sum = 0;
          //Get sum of controls value
          z?.controls.forEach((control) => {
            sum = control.value + sum;
          });
          z.average = Math.round(sum / z?.controls.length);
        });
      });
    });

    return records;
  }
}
