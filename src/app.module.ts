import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ENV } from './config/env';
import { CandidateModule } from './candidate/candidate.module';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [
    VoteModule,
    CandidateModule,

    MongooseModule.forRoot(ENV.DATABASE_URL, { dbName: 'voting-service' }),
    AuthModule,
    StudentsModule,
  ],
})
export class AppModule {}
