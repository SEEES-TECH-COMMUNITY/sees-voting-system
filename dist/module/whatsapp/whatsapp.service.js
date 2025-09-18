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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappService = void 0;
const common_1 = require("@nestjs/common");
const env_1 = require("../../config/env");
const http_service_1 = require("../../shared/services/http.service");
let WhatsappService = class WhatsappService {
    constructor(httpService) {
        this.httpService = httpService;
        this.BASE_WHATSAPP_URL = env_1.ENV.WHATSAPP_API_URL;
    }
    async sendMessage(phone_number, mat_number, password) {
        const text = `Welcome to SEES Voting System. Your login details are as follows:\nMatric Number: ${mat_number}\nPassword: ${password}\nPlease keep this information confidential and do not share it with anyone.\n You can proceed to vote on https://voting.seees-uniben.org .\nThank you for being a part of our community!`;
        const url = `${this.BASE_WHATSAPP_URL}/api/sendText`;
        const payload = {
            chatId: `${phone_number.replace('+', '')}@c.us`,
            text,
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
};
exports.WhatsappService = WhatsappService;
exports.WhatsappService = WhatsappService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], WhatsappService);
//# sourceMappingURL=whatsapp.service.js.map