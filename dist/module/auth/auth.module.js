"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_controller_1 = require("./auth.controller");
const students_schema_1 = require("../../shared/db/students.schema");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const env_1 = require("../../config/env");
const fingerprint_schema_1 = require("../../shared/db/fingerprint.schema");
const auth_strategy_1 = require("../../shared/strategy/auth.strategy");
const crypto_service_1 = require("../../shared/services/crypto.service");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: students_schema_1.Student.name, schema: students_schema_1.StudentSchema },
                { name: fingerprint_schema_1.FingerPrint.name, schema: fingerprint_schema_1.FingerPrintSchema },
            ]),
            jwt_1.JwtModule.register({
                secret: env_1.ENV.JWT_SECRET,
                signOptions: { expiresIn: '1h' },
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, auth_strategy_1.AuthTokenStrategy, crypto_service_1.CryptoService],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map