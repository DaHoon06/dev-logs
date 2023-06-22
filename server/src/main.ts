import { NestFactory } from '@nestjs/core';
import { AppModule } from '@src/app.module';
import {ValidationPipe} from "@nestjs/common";
import { setupSwagger } from '@config/swagger';
import {winstonConfig} from "@config/logger/winston.config";
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: winstonConfig
  });

  app.enableCors();
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  )
  setupSwagger(app);
  await app.listen(8080);
}
bootstrap();
