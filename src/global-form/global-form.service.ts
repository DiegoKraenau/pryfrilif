import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { GlobalForm, GlobalFormDocument } from './entities/global-form.entity';
import * as p from '../../scripts/form.json';

@Injectable()
export class GlobalFormService {
  constructor(
    @InjectModel(GlobalForm.name)
    private globalFormModel: Model<GlobalFormDocument>,
  ) {}

  async findAll() {
    return this.globalFormModel.find().exec();
  }

  async createForm(dto: any) {
    const form = new this.globalFormModel(dto);
    return await form.save();
  }

  async getFormByDefaultCode() {
    const form = await this.globalFormModel.findOne({ code: 'GLOBAL_FORM' });
    if (!form) throw new NotFoundException('Formulario no encontrado');
    return form;
  }

  async updateForm(dto: any) {
    const form = await this.getFormByDefaultCode();
    const updated = await this.globalFormModel.updateOne(
      { _id: form._id },
      dto,
    );
    return updated;
  }

  async mapping() {
    await new this.globalFormModel(p).save();
    return true;
  }
}
