import { WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { WhatsappService } from './whatsapp.service';
import { IWebhook } from 'src/shared/meta/IWebhook';
export declare class WhatsappProcessor extends WorkerHost {
    private service;
    constructor(service: WhatsappService);
    process(job: Job<IWebhook, IWebhook, string>): Promise<any>;
}
