import { AuthService } from './auth.service';
import { Response } from 'express';
import { ENV } from 'src/config/env';
import { LoginDto, loginUserByHashDto } from 'src/shared/dto/creat.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthController {
    private authService;
    private jwtService;
    private configService;
    constructor(authService: AuthService, jwtService: JwtService, configService: ConfigService<typeof ENV>);
    googleAuthCallback(body: LoginDto, res: Response): Promise<void>;
    hashLogin(body: loginUserByHashDto, res: Response): Promise<void>;
}
