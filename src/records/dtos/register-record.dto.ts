import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RecordDto {
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsOptional()
  userId: string;

  @IsNotEmpty()
  form: any;
}
