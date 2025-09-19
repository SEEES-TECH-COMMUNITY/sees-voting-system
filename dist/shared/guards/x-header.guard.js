"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderGuard = void 0;
const common_1 = require("@nestjs/common");
const env_1 = require("../../config/env");
let HeaderGuard = class HeaderGuard {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const serverKey = request.headers['x-server-key'];
        return serverKey === env_1.ENV.SERVER_KEY;
    }
};
exports.HeaderGuard = HeaderGuard;
exports.HeaderGuard = HeaderGuard = __decorate([
    (0, common_1.Injectable)()
], HeaderGuard);
//# sourceMappingURL=x-header.guard.js.map