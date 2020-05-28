import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {createConnection} from "typeorm";
import {SingleDBConnection} from "./db_services/ConnectionSingleton";

async function bootstrap() {
  SingleDBConnection.getInstance();

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
