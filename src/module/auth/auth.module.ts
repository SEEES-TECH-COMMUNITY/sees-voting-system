import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Student, StudentSchema } from 'src/shared/db/students.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { ENV } from 'src/config/env';
import {
  FingerPrint,
  FingerPrintSchema,
} from 'src/shared/db/fingerprint.schema';
import { AuthTokenStrategy } from 'src/shared/strategy/auth.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Student.name, schema: StudentSchema },
      { name: FingerPrint.name, schema: FingerPrintSchema },
    ]),
    JwtModule.register({
      secret: ENV.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, AuthTokenStrategy],
  exports: [AuthService],
})
export class AuthModule {}
