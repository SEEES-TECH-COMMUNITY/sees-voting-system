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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const env_1 = require("../../config/env");
const creat_dto_1 = require("../../shared/dto/creat.dto");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const cookies_1 = require("../../shared/constants/cookies");
let AuthController = class AuthController {
    constructor(authService, jwtService, configService) {
        this.authService = authService;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async googleAuthCallback(body, res) {
        const student = await this.authService.loginUser(body);
        console.log(student);
        if (student) {
            const config = env_1.ENV.NODE_ENV === 'production'
                ? {
                    maxAge: 3600000,
                    httpOnly: true,
                    path: '/',
                    secure: true,
                    sameSite: 'lax',
                    domain: 'seees-uniben.org',
                }
                : {
                    httpOnly: true,
                    path: '/',
                    secure: false,
                    sameSite: 'lax',
                    maxAge: 3600000,
                };
            const token = this.jwtService.sign({ identifier: student._id, fingerprint: body.finger_print }, {
                secret: this.configService.get('JWT_SECRET'),
                expiresIn: '1h',
            });
            res.cookie('seees_token', token, config).status(200).json({
                success: true,
                student,
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: 'You are not authorized to login on this platform.',
            });
        }
    }
    async hashLogin(body, res) {
        const student = await this.authService.loginUserByHash(body);
        console.log(student);
        if (student) {
            const config = env_1.ENV.NODE_ENV === 'production'
                ? {
                    maxAge: 3600000,
                    httpOnly: true,
                    path: '/',
                    secure: true,
                    sameSite: 'lax',
                    domain: 'seees-uniben.org',
                }
                : {
                    httpOnly: true,
                    path: '/',
                    secure: false,
                    sameSite: 'lax',
                    maxAge: 3600000,
                };
            const token = this.jwtService.sign({ identifier: student._id, fingerprint: body.finger_print }, {
                secret: this.configService.get('JWT_SECRET'),
                expiresIn: '2h',
            });
            res.cookie(cookies_1.COOKIE_KEY, token, config).status(200).json({
                success: true,
                student,
            });
        }
        else {
            res.status(401).json({
                success: false,
                message: 'You are not authorized to login on this platform.',
            });
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [creat_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthCallback", null);
__decorate([
    (0, common_1.Post)('hash-login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [creat_dto_1.loginUserByHashDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "hashLogin", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map