import { Controller } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';

@Controller('rest/whatsapp')
export class WhatsappController {
  constructor(private service: WhatsappService) {}
}
