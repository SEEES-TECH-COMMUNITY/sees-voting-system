import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard as PassportGuard } from '@nestjs/passport';

import { Observable } from 'rxjs';
import { ENV } from 'src/config/env';

@Injectable()
export class HeaderGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const serverKey = request.headers['x-server-key'];
    return serverKey === ENV.SERVER_KEY;
  }
}
