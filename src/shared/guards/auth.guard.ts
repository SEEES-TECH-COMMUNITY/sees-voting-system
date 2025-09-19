import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard as PassportGuard } from '@nestjs/passport';

import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard extends PassportGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }

  handleRequest(err, user, info, context: ExecutionContext, status?: any) {
    console.warn(info);
    if (info && info.name === 'TokenExpiredError') {
      throw new UnauthorizedException('Token expired');
    }
    if (err || !user) {
      throw err || new UnauthorizedException();
    }

    return user;
  }
}
