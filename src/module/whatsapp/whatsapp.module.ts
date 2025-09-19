import { Module } from '@nestjs/common';
import { WhatsappController } from './whatsapp.controller';
import { WhatsappService } from './whatsapp.service';
import { HttpModule } from '@nestjs/axios';
import { HttpService } from 'src/shared/services/http.service';
import { Student, StudentSchema } from 'src/shared/db/students.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CryptoService } from 'src/shared/services/crypto.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    HttpModule.register({
      timeout: 200000,
      maxRedirects: 5,
    }),
  ],
  providers: [WhatsappService, HttpService, CryptoService],
  controllers: [WhatsappController],
  exports: [WhatsappService],
})
export class WhatsappModule {}
