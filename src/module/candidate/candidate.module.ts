import { Module } from '@nestjs/common';
import { CandidateController } from './candidate.controller';
import { CandidateService } from './candidate.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from '../../shared/db/students.schema';
import { Candidate, CandidateSchema } from '../../shared/db/candidate.schema';
import { Vote, VoteSchema } from '../../shared/db/vote.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
      { name: Candidate.name, schema: CandidateSchema },
      { name: Vote.name, schema: VoteSchema },
    ]),
  ],
  providers: [CandidateService],
  controllers: [CandidateController]
})
export class CandidateModule { }
