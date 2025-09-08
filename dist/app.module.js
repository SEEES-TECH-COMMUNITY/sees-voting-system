"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const auth_module_1 = require("./module/auth/auth.module");
const students_module_1 = require("./module/students/students.module");
const mongoose_1 = require("@nestjs/mongoose");
const env_1 = require("./config/env");
const candidate_module_1 = require("./module/candidate/candidate.module");
const vote_module_1 = require("./module/vote/vote.module");
const app_controller_1 = require("./app.controller");
const config_1 = require("@nestjs/config");
const configuration_1 = require("./config/configuration");
const whatsapp_module_1 = require("./module/whatsapp/whatsapp.module");
const throttler_1 = require("@nestjs/throttler");
const core_1 = require("@nestjs/core");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        imports: [
            whatsapp_module_1.WhatsappModule,
            throttler_1.ThrottlerModule.forRoot({
                throttlers: [{ limit: 100, ttl: 60000 }],
            }),
            vote_module_1.VoteModule,
            candidate_module_1.CandidateModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [configuration_1.default],
            }),
            mongoose_1.MongooseModule.forRoot(env_1.ENV.DATABASE_URL, { dbName: 'voting-service' }),
            auth_module_1.AuthModule,
            students_module_1.StudentsModule,
        ],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: throttler_1.ThrottlerGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map