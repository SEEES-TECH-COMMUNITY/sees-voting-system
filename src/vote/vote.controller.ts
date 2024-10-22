import { Controller, Param, Post, UseGuards } from '@nestjs/common';
import { VoteService } from './vote.service';
import { GoogleGuard } from '../auth/guards/google.guard';
import { User } from '../shared/decorators/user.decorator';

@Controller('vote')
export class VoteController {
  constructor(private service: VoteService) {}
  @Post('cast/:candidate_id')
  @UseGuards(GoogleGuard)
  async castVote(
    @User() user_id: string,
    @Param('candidate_id') candidate_id: string,

  ) {
    console.log(
      {
        user_id,
        candidate_id
      }
    )
    return await this.service.castVote(
      candidate_id,
      user_id,
    );
  }
}
