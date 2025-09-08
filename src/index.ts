import './config/validateEnv';
import { NestFactory } from '@nestjs/core';
const treblle = require('@treblle/express');

import { AppModule } from './app.module';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import { ENV } from './config/env';
import { ForbiddenExceptionFilter } from './shared/filters/forbidden.exception-filter';
import { NextFunction, Request, Response } from 'express';

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
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      always: true,
    }),
  );
  if (ENV.NODE_ENV !== 'development') {
    app.use((req: Request, res: Response, next: NextFunction) => {
      if (new RegExp('swagger').test(req.path)) {
        return next();
      }
      return treblle({
        apiKey: process.env.TREBLLE_API_KEY,
        projectId: process.env.TREBLLE_PROJECT_ID,
        additionalFieldsToMask: [],
        blacklistPaths: [],
      })(req, res, next);
    });
  }
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
