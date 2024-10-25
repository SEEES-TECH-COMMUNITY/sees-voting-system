import {
  Body,
  Controller,
  Get,
  ParseBoolPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CandidateService } from './candidate.service';
import {
  CreateCandidateBulkDto,
  CreateCandidateDto,
} from '../shared/dto/creat.dto';

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

  @Get('result')
  getResults(
    @Query(
      'isFull',
      new ParseBoolPipe({
        optional: true,
      }),
    )
    isFull: boolean,
  ) {
    return this.service.getResults(isFull);
  }
}
