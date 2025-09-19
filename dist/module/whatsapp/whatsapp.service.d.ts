import { Model } from 'mongoose';
import { StudentDocument } from 'src/shared/db/students.schema';
import { CryptoService } from 'src/shared/services/crypto.service';
import { HttpService } from 'src/shared/services/http.service';
import { IWebhook } from 'src/shared/meta/IWebhook';
export declare class WhatsappService {
    private readonly httpService;
    private studentModel;
    private cryptoService;
    constructor(httpService: HttpService, studentModel: Model<StudentDocument>, cryptoService: CryptoService);
    BASE_WHATSAPP_URL: string;
    sendMessage(phone_number: string, mat_number: string, password: string): Promise<true>;
    messagePhone(phone_number: string, message: string): Promise<true>;
    startTyping(phone_number: string): Promise<true>;
    stopTyping(phone_number: string): Promise<true>;
    handleWhatsappWebhook(payload: IWebhook): Promise<true | "OK">;
    generateRandomPassword(): string;
    sendSeen(messageId: string, chatId: string): Promise<true>;
}
