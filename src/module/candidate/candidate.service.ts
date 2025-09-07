import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from } from 'rxjs';
import { Position } from 'src/shared/constants/positions';
import { Candidate, CandidateDocument } from 'src/shared/db/candidate.schema';
import { CreateCandidateDto } from 'src/shared/dto/creat.dto';

@Injectable()
export class CandidateService {
  constructor(
    @InjectModel(Candidate.name)
    private candidateModel: Model<CandidateDocument>,
  ) {}

  async createCandidate(candidate: CreateCandidateDto) {
    await this.checkCandidateExists(candidate.full_name, candidate.level);
    const newCandidate = new this.candidateModel(candidate);
    return newCandidate.save();
  }
  async createCandidateBulk(candidates: Array<CreateCandidateDto>) {
    for (const candidate of candidates) {
      await this.checkCandidateExists(candidate.full_name, candidate.level);
    }
    return this.candidateModel.insertMany(candidates);
  }
  async checkCandidateExists(full_name: string, level: string) {
    const candidate = await this.candidateModel.findOne({
      full_name,
      level,
    });
    if (candidate) {
      throw new BadRequestException('Candidate Already Exists');
    }
  }

  updateCandidate(candidate_id: string, update: CreateCandidateDto) {
    return this.candidateModel.findByIdAndUpdate(candidate_id, update, {
      new: true,
    });
  }

  deleteCandidate(candidate_id: string) {
    return this.candidateModel.findByIdAndDelete(candidate_id);
  }

  async getAllCandidates() {
    const positionOrder = Object.values(Position);
    const candidates = await this.candidateModel
      .aggregate([
        {
          $addFields: {
            positionRank: {
              $indexOfArray: [positionOrder, '$position'],
            },
          },
        },
        {
          $sort: { positionRank: 1 },
        },
        {
          $project: { positionRank: 0 },
        },
      ])
      .exec();
    return candidates.map((candidate) => {
      candidate.id = candidate._id;
      delete candidate._id;
      delete candidate.__v;
      return candidate;
    });
  }
  async getResults(isFull = false) {
    const positionOrder = Object.values(Position);
    const query = isFull
      ? [
          {
            $lookup: {
              from: 'votes',
              localField: '_id',
              foreignField: 'candidate_id',
              as: 'votes',
            },
          },
          {
            $addFields: {
              voteCount: {
                $size: '$votes',
              },
              positionRank: {
                $indexOfArray: [positionOrder, '$position'],
              },
            },
          },
          {
            $lookup: {
              from: 'students',
              localField: 'votes.student_id',
              foreignField: '_id',
              as: 'votes.student',
            },
          },
          {
            $group: {
              _id: '$_id',
              full_name: { $first: '$full_name' },
              position: { $first: '$position' },
              votes: { $push: '$votes' },
              voteCount: { $first: '$voteCount' },
              positionRank: { $first: '$positionRank' },
            },
          },
          {
            $sort: { positionRank: 1 },
          },
          {
            $project: { positionRank: 0 },
          },
        ]
      : [
          {
            $lookup: {
              from: 'votes',
              localField: '_id',
              foreignField: 'candidate_id',
              as: 'votes',
            },
          },
          {
            $addFields: {
              voteCount: {
                $size: '$votes',
              },
              positionRank: {
                $indexOfArray: [positionOrder, '$position'],
              },
            },
          },
          { $sort: { positionRank: 1 } },
          {
            $project: { positionRank: 0 },
          },
        ];
    const results = await this.candidateModel.aggregate(query as any).exec();
    return results.map((result) => {
      result.id = result._id;
      delete result._id;
      delete result.__v;
      if (!isFull) {
        delete result.votes;
      }
      return result;
    });
  }
}
