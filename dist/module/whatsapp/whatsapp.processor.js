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
exports.WhatsappProcessor = void 0;
const bullmq_1 = require("@nestjs/bullmq");
const whatsapp_service_1 = require("./whatsapp.service");
let WhatsappProcessor = class WhatsappProcessor extends bullmq_1.WorkerHost {
    constructor(service) {
        super();
        this.service = service;
    }
    async process(job) {
        console.log('Processing job:', job.id, job.data);
        console.log(Date.now());
        await new Promise((resolve) => setTimeout(resolve, 5000));
        await this.service.handleWhatsappWebhook(job.data);
        await job.updateProgress(100);
        return job.data;
    }
};
exports.WhatsappProcessor = WhatsappProcessor;
exports.WhatsappProcessor = WhatsappProcessor = __decorate([
    (0, bullmq_1.Processor)('whatsapp'),
    __metadata("design:paramtypes", [whatsapp_service_1.WhatsappService])
], WhatsappProcessor);
//# sourceMappingURL=whatsapp.processor.js.map