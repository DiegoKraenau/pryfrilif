import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GlobalFormService } from './global-form.service';

@Controller('global-form')
export class GlobalFormController {
  constructor(private globalFormService: GlobalFormService) {}

  @Get()
  async getForms() {
    const data = await this.globalFormService.findAll();
    return data;
  }

  @Post()
  async createForm(@Body() dto: any) {
    const data = await this.globalFormService.createForm(dto);
    return data;
  }

  @Get('default')
  async getForm() {
    const data = await this.globalFormService.getFormByDefaultCode();
    return data;
  }

  @Put('update-default')
  async deleteCategory(@Body() dto: any) {
    const data = await this.globalFormService.updateForm(dto);
    return data;
  }

  @Get('mapping')
  async mapping(){
    const data = await this.globalFormService.mapping();

    return data;
  }
}
