import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ENV } from 'src/config/env';
import { Student, StudentDocument } from 'src/shared/db/students.schema';
import { CryptoService } from 'src/shared/services/crypto.service';
import { HttpService } from 'src/shared/services/http.service';
import * as argon2 from 'argon2';
import { IWebhook } from 'src/shared/meta/IWebhook';

@Injectable()
export class WhatsappService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
    private cryptoService: CryptoService,
  ) {}
  BASE_WHATSAPP_URL = ENV.WHATSAPP_API_URL;
  async sendMessage(
    phone_number: string,
    mat_number: string,
    password: string,
  ) {
    const firstDelay = Math.random() * 5000; // Random delay between 5 to 10 seconds
    await this.startTyping(phone_number);
    await new Promise((resolve) => setTimeout(resolve, firstDelay));
    const sessionHash = {
      mat_number,
      password,
    };
    const hash = await this.cryptoService.encryptHash(sessionHash);
    const dashboard_url = `${ENV.DASHBOARD_URL}/activate?session=${encodeURIComponent(
      hash,
    )}`;
    const text = `Welcome to S.E.E.E.S Voting System.\nYour account is now active. Please use the link below to log in and participate in the election:\n${dashboard_url}\nThank you for being a part of our community`;

    return await this.messagePhone(phone_number, text);
  }
  async messagePhone(phone_number: string, message: string) {
    const firstDelay = Math.random() * 5000;
    const secondDelay = Math.random() * 5000;
    await this.startTyping(phone_number);
    await new Promise((resolve) => setTimeout(resolve, firstDelay));
    const url = `${this.BASE_WHATSAPP_URL}/api/sendText`;
    await this.stopTyping(phone_number);
    await new Promise((resolve) => setTimeout(resolve, secondDelay));
    const payload = {
      chatId: `${phone_number.replace('+', '')}@c.us`,
      text: message,
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
  async handleWhatsappWebhook(payload: IWebhook) {
    const { from, body } = payload.payload;
    if (body.toUpperCase().trim() !== 'VOTE') {
      return 'OK';
    }
    const student = await this.studentModel
      .findOne({ phone_number: from.replace('@c.us', '') })
      .select('+password')
      .exec();
    await this.messagePhone(
      from.replace('@c.us', ''),
      'Voting concluded. Thank you for your interest.',
    );
    return 'OK';
    if (!student) {
      console.log('Phone number not registered:', from);
      return;
      return this.messagePhone(
        from.replace('@c.us', ''),
        'Your phone number is not registered. Please contact the administrator.',
      );
    }
    if (student.password) {
      console.log('Account already active for:', from);
      return;
      return this.messagePhone(
        from.replace('@c.us', ''),
        'Your account is already active. Please log in with the link already sent to participate in the election.',
      );
    }
    const password = this.generateRandomPassword();
    // send message with phone number and password
    await this.sendMessage(student.phone_number, student.mat_number, password);
    // update student password
    student.password = await argon2.hash(password);
    await student.save();
    return 'OK';
  }
  generateRandomPassword(): string {
    const length = 8;
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  }

  async sendSeen(messageId: string, chatId: string) {
    const url = `${this.BASE_WHATSAPP_URL}/api/sendSeen`;
    const payload = {
      messageIds: [messageId],
      chatId,
      session: 'default',
    };
    const { success } = await this.httpService.request<any>({
      url,
      method: 'post',
      data: payload,
    });
    if (!success) {
      throw new BadRequestException('Failed to send seen via WhatsApp');
    }
    return success;
  }
}
