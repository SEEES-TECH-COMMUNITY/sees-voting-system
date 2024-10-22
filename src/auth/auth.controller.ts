import { Body, Controller, Post, Res } from '@nestjs/common';

import { AuthService } from './auth.service';
import { CookieOptions, json, Response } from 'express';
import path from 'path';
import { ENV } from 'src/config/env';
import { CONSTANTS } from 'src/config/constants.enum';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('google/login')
  async googleAuthCallback(@Body() token, @Res() res: Response) {
    const value = await this.authService.verifyIdToken(token.token);
    const config: CookieOptions =
      ENV.NODE_ENV === 'production'
        ? {
            maxAge: 3600000,
            httpOnly: true,
            path: '/',
            secure: true,
            sameSite: 'none',
          }
        : {
            httpOnly: true,
            path: '/',
            domain: 'localhost',
            secure: false,
            sameSite: 'lax',
            maxAge: 3600000,
          };
    if (value) {
      res.cookie('seees_token', token.token, config).status(200).json({
        success: true,
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'You are not authorized to login on this platform',
      });
    }
  }
}
