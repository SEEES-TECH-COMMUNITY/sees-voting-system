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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoService = void 0;
const common_1 = require("@nestjs/common");
const crypto = require("crypto");
const env_1 = require("../../config/env");
let CryptoService = class CryptoService {
    constructor() { }
    async encryptHash(payload) {
        const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(env_1.ENV.SECRET_KEY, 'hex'), Buffer.alloc(16, 0));
        let encrypted = cipher.update(JSON.stringify(payload), 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    }
    async decryptHash(hash) {
        const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(env_1.ENV.SECRET_KEY, 'hex'), Buffer.alloc(16, 0));
        let decrypted = decipher.update(hash, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return JSON.parse(decrypted);
    }
};
exports.CryptoService = CryptoService;
exports.CryptoService = CryptoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CryptoService);
//# sourceMappingURL=crypto.service.js.map