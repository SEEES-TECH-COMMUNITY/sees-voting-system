import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Candidate, CandidateDocument } from 'src/shared/db/candidate.schema';
import { Vote, VoteDocument } from 'src/shared/db/vote.schema';

@Injectable()
export class VoteService {
  constructor(
    @InjectModel(Vote.name) private voteModel: Model<VoteDocument>,
    @InjectModel(Candidate.name)
    private candidateModel: Model<CandidateDocument>,
  ) {}

  async castVote(candidate_id: string, student_id: string) {
    await this.checkIfVoteCastedForPosition(candidate_id, student_id);
    const vote = await this.voteModel.create({
      student_id,
      candidate_id,
    });
    console.log(vote);
    return {
      success: true,
      message: 'Vote Casted Successfully',
      data: vote,
    };
  }

  async checkIfVoteCastedForPosition(candidate_id: string, student_id: string) {
    const candidate = await this.candidateModel.findOne({
      _id: candidate_id,
    });

    if (!candidate) {
      throw new BadRequestException('No Candidate Found');
    }

    const candidatesWithPosition = await this.candidateModel.find({
      position: candidate.position,
    });

    const hasUserCasted = await this.voteModel.findOne({
      student_id,
      candidate_id: {
        $in: candidatesWithPosition.map((val) => val.id),
      },
    });

    if (hasUserCasted) {
      throw new BadRequestException(
        hasUserCasted.candidate_id === candidate_id
          ? 'Already Voted for Candidate'
          : 'Already Voted for position.',
      );
    }
  }
}
