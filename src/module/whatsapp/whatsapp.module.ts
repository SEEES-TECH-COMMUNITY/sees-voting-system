import { Module } from '@nestjs/common';
import { WhatsappController } from './whatsapp.controller';
import { WhatsappService } from './whatsapp.service';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from 'src/shared/services/http.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 200000,
      maxRedirects: 5,
    }),
  ],
  providers: [WhatsappService, HttpService],
  controllers: [WhatsappController],
  exports: [WhatsappService],
})
export class WhatsappModule {}
