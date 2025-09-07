import { BadRequestException, Injectable } from '@nestjs/common';
import { ENV } from 'src/config/env';
import { HttpService } from 'src/shared/services/http.service';

@Injectable()
export class WhatsappService {
  constructor(private readonly httpService: HttpService) {}
  BASE_WHATSAPP_URL = ENV.WHATSAPP_API_URL;
  async sendMessage(
    phone_number: string,
    mat_number: string,
    password: string,
  ) {
    const text = `Welcome to SEES Voting System. Your login details are as follows:\nMatric Number: ${mat_number}\nPassword: ${password}\nPlease keep this information confidential and do not share it with anyone.\nThank you for being a part of our community!`;
    const url = `${this.BASE_WHATSAPP_URL}/api/sendText`;
    const payload = {
      chatId: `${phone_number.replace('+', '')}@c.us`,
      text,
      session: 'default',
    };

    const { success } = await this.httpService.request<any>({
      url,
      method: 'post',
      data: payload,
    });
    if (!success) {
      throw new BadRequestException('Failed to send message via WhatsApp');
    }
    return success;
  }
}
