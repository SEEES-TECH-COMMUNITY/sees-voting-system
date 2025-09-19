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
exports.VoteController = void 0;
const common_1 = require("@nestjs/common");
const vote_service_1 = require("./vote.service");
const auth_guard_1 = require("../../shared/guards/auth.guard");
const user_decorator_1 = require("../../shared/decorators/user.decorator");
let VoteController = class VoteController {
    constructor(service) {
        this.service = service;
    }
    async castVote(user_id, candidate_id) {
        console.log({
            user_id,
            candidate_id,
        });
        return await this.service.castVote(candidate_id, user_id);
    }
};
exports.VoteController = VoteController;
__decorate([
    (0, common_1.Post)('cast/:candidate_id'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, user_decorator_1.User)()),
    __param(1, (0, common_1.Param)('candidate_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VoteController.prototype, "castVote", null);
exports.VoteController = VoteController = __decorate([
    (0, common_1.Controller)('vote'),
    __metadata("design:paramtypes", [vote_service_1.VoteService])
], VoteController);
//# sourceMappingURL=vote.controller.js.map