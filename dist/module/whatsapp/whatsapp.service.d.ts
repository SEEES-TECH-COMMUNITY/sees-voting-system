import { HttpService } from 'src/shared/services/http.service';
export declare class WhatsappService {
    private readonly httpService;
    constructor(httpService: HttpService);
    BASE_WHATSAPP_URL: string;
    sendMessage(phone_number: string, mat_number: string, password: string): Promise<true>;
}
