"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const env_1 = require("../../config/env");
const students_schema_1 = require("../../shared/db/students.schema");
const crypto_service_1 = require("../../shared/services/crypto.service");
const http_service_1 = require("../../shared/services/http.service");
const argon2 = require("argon2");
let WhatsappService = class WhatsappService {
    constructor(httpService, studentModel, cryptoService) {
        this.httpService = httpService;
        this.studentModel = studentModel;
        this.cryptoService = cryptoService;
        this.BASE_WHATSAPP_URL = env_1.ENV.WHATSAPP_API_URL;
    }
    async sendMessage(phone_number, mat_number, password) {
        const firstDelay = Math.random() * 5000;
        await this.startTyping(phone_number);
        await new Promise((resolve) => setTimeout(resolve, firstDelay));
        const sessionHash = {
            mat_number,
            password,
        };
        const hash = await this.cryptoService.encryptHash(sessionHash);
        const dashboard_url = `${env_1.ENV.DASHBOARD_URL}/activate?session=${encodeURIComponent(hash)}`;
        const text = `Welcome to S.E.E.E.S Voting System.\nYour account is now active. Please use the link below to log in and participate in the election:\n${dashboard_url}\nThank you for being a part of our community`;
        return await this.messagePhone(phone_number, text);
    }
    async messagePhone(phone_number, message) {
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
        const { success } = await this.httpService.request({
            url,
            method: 'post',
            data: payload,
        });
        if (!success) {
            throw new common_1.BadRequestException('Failed to send message via WhatsApp');
        }
        return success;
    }
    async startTyping(phone_number) {
        const url = `${this.BASE_WHATSAPP_URL}/api/startTyping`;
        const payload = {
            chatId: `${phone_number.replace('+', '')}@c.us`,
            session: 'default',
        };
        const { success } = await this.httpService.request({
            url,
            method: 'post',
            data: payload,
        });
        if (!success) {
            throw new common_1.BadRequestException('Failed to start typing via WhatsApp');
        }
        return success;
    }
    async stopTyping(phone_number) {
        const url = `${this.BASE_WHATSAPP_URL}/api/stopTyping`;
        const payload = {
            chatId: `${phone_number.replace('+', '')}@c.us`,
            session: 'default',
        };
        const { success } = await this.httpService.request({
            url,
            method: 'post',
            data: payload,
        });
        if (!success) {
            throw new common_1.BadRequestException('Failed to stop typing via WhatsApp');
        }
        return success;
    }
    async handleWhatsappWebhook(payload) {
        const { from, body } = payload.payload;
        if (body.toUpperCase().trim() !== 'VOTE') {
            return 'OK';
        }
        const student = await this.studentModel
            .findOne({ phone_number: from.replace('@c.us', '') })
            .select('+password')
            .exec();
        if (!student) {
            console.log('Phone number not registered:', from);
            return;
            return this.messagePhone(from.replace('@c.us', ''), 'Your phone number is not registered. Please contact the administrator.');
        }
        if (student.password) {
            console.log('Account already active for:', from);
            return;
            return this.messagePhone(from.replace('@c.us', ''), 'Your account is already active. Please log in with the link already sent to participate in the election.');
        }
        const password = this.generateRandomPassword();
        await this.sendMessage(student.phone_number, student.mat_number, password);
        student.password = await argon2.hash(password);
        await student.save();
        return 'OK';
    }
    generateRandomPassword() {
        const length = 8;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let password = '';
        for (let i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        return password;
    }
    async sendSeen(messageId, chatId) {
        const url = `${this.BASE_WHATSAPP_URL}/api/sendSeen`;
        const payload = {
            messageIds: [messageId],
            chatId,
            session: 'default',
        };
        const { success } = await this.httpService.request({
            url,
            method: 'post',
            data: payload,
        });
        if (!success) {
            throw new common_1.BadRequestException('Failed to send seen via WhatsApp');
        }
        return success;
    }
};
exports.WhatsappService = WhatsappService;
exports.WhatsappService = WhatsappService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(students_schema_1.Student.name)),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        mongoose_2.Model,
        crypto_service_1.CryptoService])
], WhatsappService);
//# sourceMappingURL=whatsapp.service.js.map