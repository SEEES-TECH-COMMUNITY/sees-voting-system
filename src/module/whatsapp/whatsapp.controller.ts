import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { IWebhook } from 'src/shared/meta/IWebhook';
import { HeaderGuard } from 'src/shared/guards/x-header.guard';
import { Queue } from 'bullmq';
import { InjectQueue } from '@nestjs/bullmq';

@Controller('whatsapp')
export class WhatsappController {
  constructor(
    private service: WhatsappService,
    @InjectQueue('whatsapp') private whatsappQueue: Queue,
  ) {}
  @Post('webhook')
  @UseGuards(HeaderGuard)
  async webhook(@Body() payload: IWebhook) {
    await this.whatsappQueue.add('whatsapp', payload);
    return 'OK';
  }
}
