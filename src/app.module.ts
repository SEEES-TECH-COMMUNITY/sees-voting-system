import { Module } from '@nestjs/common';
import { AuthModule } from './module/auth/auth.module';
import { StudentsModule } from './module/students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ENV } from './config/env';
import { CandidateModule } from './module/candidate/candidate.module';
import { VoteModule } from './module/vote/vote.module';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { WhatsappModule } from './module/whatsapp/whatsapp.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { BullModule } from '@nestjs/bullmq';

@Module({
  controllers: [AppController],
  imports: [
    WhatsappModule,
    ThrottlerModule.forRoot({
      throttlers: [{ limit: 100, ttl: 60000 }],
    }),
    VoteModule,
    CandidateModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(ENV.DATABASE_URL, { dbName: 'voting-service' }),
    AuthModule,
    StudentsModule,
    BullModule.forRoot({
      connection: {
        host: ENV.REDIS_HOST,
        port: 14947,
        username: ENV.REDIS_USERNAME,
        password: ENV.REDIS_PASSWORD,
      },
    }),
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
