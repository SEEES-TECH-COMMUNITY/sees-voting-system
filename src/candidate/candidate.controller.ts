import { Body, Controller, Get, Post } from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { CreateCandidateBulkDto, CreateCandidateDto } from '../shared/dto/creat.dto';

@Controller('candidate')
export class CandidateController {
  constructor(private service: CandidateService) {}

  // @Post('create')
  // async createCandidate(@Body() payload: CreateCandidateDto) {
  //   return await this.service.createCandidate(payload);
  // }

  // @Post('create/bulk')
  // async createCandidateBulk(@Body() payload: CreateCandidateBulkDto) {
  //   return await this.service.createCandidateBulk(payload.candidates);
  // }

  @Get('all')
  getCandidates() {
    return this.service.getAllCandidates();
  }
}
