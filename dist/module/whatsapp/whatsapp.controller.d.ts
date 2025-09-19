import { WhatsappService } from './whatsapp.service';
import { IWebhook } from 'src/shared/meta/IWebhook';
export declare class WhatsappController {
    private service;
    constructor(service: WhatsappService);
    webhook(payload: IWebhook): Promise<true | "OK">;
}
