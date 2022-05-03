import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GlobalFormController } from './global-form.controller';
import { GlobalFormService } from './global-form.service';
import { GlobalForm, GlobalFormSchema } from './entities/global-form.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GlobalForm.name, schema: GlobalFormSchema },
    ]),
  ],
  controllers: [GlobalFormController],
  providers: [GlobalFormService],
})
export class GlobalFormModule {}
