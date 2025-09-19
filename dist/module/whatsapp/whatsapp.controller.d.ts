import { WhatsappService } from './whatsapp.service';
import { IWebhook } from 'src/shared/meta/IWebhook';
import { Queue } from 'bullmq';
export declare class WhatsappController {
    private service;
    private whatsappQueue;
    constructor(service: WhatsappService, whatsappQueue: Queue);
    webhook(payload: IWebhook): Promise<string>;
}
