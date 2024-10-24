import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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
    const candidates = await this.candidateModel.aggregate([
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
        $project: { positionRank: 0 }, // Optionally remove the rank field from the output
      },
    ]).exec();
    return candidates.map((candidate) => {
      candidate.id = candidate._id;
      delete candidate._id;
      delete candidate.__v;
      return candidate;
    });
  }
}
