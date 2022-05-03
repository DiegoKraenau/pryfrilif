import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { GlobalFormModule } from './global-form/global-form.module';
import { RecordsModule } from './records/records.module';

const generateConnection = () => {
  let connection = '';
  if (process.env.DATABASE_USERNAME && process.env.DATABASE_PASSWORD) {
    connection = `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_USERNAME}.mongo.cosmos.azure.com:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@${process.env.DATABASE_USERNAME}@`;
  } else {
    connection = `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
  }
  console.log('Connecting to ', connection);
  return connection;
};

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(generateConnection()),
    GlobalFormModule,
    RecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
