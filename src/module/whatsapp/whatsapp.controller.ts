import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { IWebhook } from 'src/shared/meta/IWebhook';
import { HeaderGuard } from 'src/shared/guards/x-header.guard';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private service: WhatsappService) {}
  @Post('webhook')
  @UseGuards(HeaderGuard)
  async webhook(@Body() payload: IWebhook) {
    console.log('Webhook received:', JSON.stringify(payload, null, 2));
    return this.service.handleWhatsappWebhook(payload);
  }
}
