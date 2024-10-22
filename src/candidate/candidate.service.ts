import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
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

  getAllCandidates() {
    return this.candidateModel.find();
  }
}
