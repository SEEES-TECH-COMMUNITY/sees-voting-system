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
    await this.startTyping(phone_number);
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const text = `Welcome to the SEES Voting System. \nYour login details will be sent to this number at the start of the election tomorrow. \nThank you for being part of our community!`;
    const url = `${this.BASE_WHATSAPP_URL}/api/sendText`;
    await this.stopTyping(phone_number);
    await new Promise((resolve) => setTimeout(resolve, 10000));
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
  async startTyping(phone_number: string) {
    const url = `${this.BASE_WHATSAPP_URL}/api/startTyping`;
    const payload = {
      chatId: `${phone_number.replace('+', '')}@c.us`,
      session: 'default',
    };

    const { success } = await this.httpService.request<any>({
      url,
      method: 'post',
      data: payload,
    });
    if (!success) {
      throw new BadRequestException('Failed to start typing via WhatsApp');
    }
    return success;
  }
  async stopTyping(phone_number: string) {
    const url = `${this.BASE_WHATSAPP_URL}/api/stopTyping`;
    const payload = {
      chatId: `${phone_number.replace('+', '')}@c.us`,
      session: 'default',
    };
    const { success } = await this.httpService.request<any>({
      url,
      method: 'post',
      data: payload,
    });
    if (!success) {
      throw new BadRequestException('Failed to stop typing via WhatsApp');
    }
    return success;
  }
}
