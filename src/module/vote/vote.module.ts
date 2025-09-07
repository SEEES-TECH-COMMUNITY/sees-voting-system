import { Module } from '@nestjs/common';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../../shared/db/students.schema';
import { Candidate, CandidateSchema } from '../../shared/db/candidate.schema';
import { Vote, VoteSchema } from '../../shared/db/vote.schema';
import { AuthService } from '../auth/auth.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
      { name: Candidate.name, schema: CandidateSchema },
      { name: Vote.name, schema: VoteSchema },
    ]),
    AuthModule,
  ],
  providers: [VoteService],
  controllers: [VoteController],
})
export class VoteModule {}
