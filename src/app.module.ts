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

@Module({
  controllers: [AppController],
  imports: [WhatsappModule,

    VoteModule,
    CandidateModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(ENV.DATABASE_URL, { dbName: 'voting-service' }),
    AuthModule,
    StudentsModule,
  ],
})
export class AppModule {}
