import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RecordDto } from './dtos';
import { RecordsService } from './records.service';

@Controller('records')
export class RecordsController {
  constructor(private recordsService: RecordsService) {}

  @Post()
  async registerRecord(@Body() dto: RecordDto) {
    const data = await this.recordsService.registerRecord(
      dto.userId,
      dto.date,
      dto.form,
    );

    return data;
  }

  @Get('by-user/:userId')
  async getRecordsByUserId(@Param('userId') userId: string) {
    const data = await this.recordsService.getRecordsByUserId(userId);

    return data;
  }
}
