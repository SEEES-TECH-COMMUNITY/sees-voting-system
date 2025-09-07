import './config/validateEnv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { ENV } from './config/env';
import { ForbiddenExceptionFilter } from './shared/filters/forbidden.exception-filter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1',
  });
  app.enableCors({
    origin: [ENV.DASHBOARD_URL],
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'PATCH'],
    credentials: true,
  });
  app.useGlobalFilters(new ForbiddenExceptionFilter());
  app.use(
    session({
      secret: 'vgz0WHhVlip359/LZmFVZZGVhXAceaJ1vRBhBxlpQ/w=',
      saveUninitialized: false,
      proxy: true,
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
      },
    }),
  );
  app.use(cookieParser());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
