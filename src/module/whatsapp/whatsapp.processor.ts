import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import { WhatsappService } from './whatsapp.service';
import { IWebhook } from 'src/shared/meta/IWebhook';

@Processor('whatsapp')
export class WhatsappProcessor extends WorkerHost {
  constructor(private service: WhatsappService) {
    super();
  }
  async process(job: Job<IWebhook, IWebhook, string>): Promise<any> {
    console.log('Processing job:', job.id, job.data);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await this.service.handleWhatsappWebhook(job.data);
    await job.updateProgress(100);
    return job.data;
  }
}
