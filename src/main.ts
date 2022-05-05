import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const logger = new Logger();

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //Validate body if accept any other field in json
    }),
  );
  await app.listen(process.env.PORT || 3000);
  console.log('aea');

  //Debug
  logger.log(`Server rendering in ${await app.getUrl()}`);
  logger.log(`Environment: ${process.env.DATABASE_HOST}`);
}
bootstrap();
