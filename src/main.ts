import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
async function bootstrap() {
  const result = dotenv.config({path:__dirname  + '/.env'});
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
