import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from 'src/module/auth/auth.service';
import { ENV } from 'src/config/env';

export type JwtPayload = {
  identifier: string;
  fingerprint: string;
};
export type SessionData = {
  userId: string;
  identifier: string;
};

@Injectable()
export class AuthTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: (req) => {
        let token = null;
        if (req && req.cookies) {
          token = req.cookies['seees_token'];
        }
        console.log({ token });
        return token;
      },
      secretOrKey: ENV.JWT_SECRET,
    });
  }

  async validate(payload: JwtPayload) {
    return await this.authService.validateUser(
      payload.identifier,
      payload.fingerprint,
    );
  }
}
