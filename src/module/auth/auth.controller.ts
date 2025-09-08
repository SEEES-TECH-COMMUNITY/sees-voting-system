import { Body, Controller, Post, Res } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CookieOptions, json, Response } from 'express';
import path from 'path';
import { ENV } from 'src/config/env';
import { CONSTANTS } from 'src/config/constants.enum';
import { LoginDto } from 'src/shared/dto/creat.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
    private configService: ConfigService<typeof ENV>,
  ) {}
  @Post('login')
  async googleAuthCallback(@Body() body: LoginDto, @Res() res: Response) {
    const student = await this.authService.loginUser(body);
    console.log(student);
    if (student) {
      const config: CookieOptions =
        ENV.NODE_ENV === 'production'
          ? {
              maxAge: 3600000,
              httpOnly: true,
              path: '/',
              secure: true,
              sameSite: 'lax',
              domain: '.seees-uniben.org',
            }
          : {
              httpOnly: true,
              path: '/',
              secure: false,
              sameSite: 'lax',
              maxAge: 3600000,
              // Remove localhost domain for flexibility
            };
      const token = this.jwtService.sign(
        { identifier: student._id, fingerprint: body.finger_print },
        {
          secret: this.configService.get('JWT_SECRET'),
          expiresIn: '1h',
        },
      );
      res.cookie('seees_token', token, config).status(200).json({
        success: true,
        student,
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'You are not authorized to login on this platform.',
      });
    }
  }
}
