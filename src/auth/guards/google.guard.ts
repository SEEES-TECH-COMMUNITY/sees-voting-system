import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Request } from 'express';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private authService: AuthService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
    if (!token || token == 'null') {
      throw new UnauthorizedException('No token provided');
    }
    const value = await this.authService.verifyIdToken(token);
    if (!value) {
      throw new UnauthorizedException('Invalid token');
    }
    request.user = value as Request['user'];
    return !!value;
  }
}
