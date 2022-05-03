import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RecordDto {
  @IsString()
  @IsNotEmpty()
  date: string;

  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  form: any;
}
