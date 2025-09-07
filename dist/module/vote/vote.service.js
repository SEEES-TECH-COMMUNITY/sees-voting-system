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
exports.VoteService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const candidate_schema_1 = require("../../shared/db/candidate.schema");
const vote_schema_1 = require("../../shared/db/vote.schema");
let VoteService = class VoteService {
    constructor(voteModel, candidateModel) {
        this.voteModel = voteModel;
        this.candidateModel = candidateModel;
    }
    async castVote(candidate_id, student_id) {
        await this.checkIfVoteCastedForPosition(candidate_id, student_id);
        const vote = await this.voteModel.create({
            student_id,
            candidate_id,
        });
        console.log(vote);
        return {
            success: true,
            message: 'Vote Casted Successfully',
            data: vote,
        };
    }
    async checkIfVoteCastedForPosition(candidate_id, student_id) {
        const candidate = await this.candidateModel.findOne({
            _id: candidate_id,
        });
        if (!candidate) {
            throw new common_1.BadRequestException('No Candidate Found');
        }
        const candidatesWithPosition = await this.candidateModel.find({
            position: candidate.position,
        });
        const hasUserCasted = await this.voteModel.findOne({
            student_id,
            candidate_id: {
                $in: candidatesWithPosition.map((val) => val.id),
            },
        });
        if (hasUserCasted) {
            throw new common_1.BadRequestException(hasUserCasted.candidate_id === candidate_id
                ? 'Already Voted for Candidate'
                : 'Already Voted for position.');
        }
    }
};
exports.VoteService = VoteService;
exports.VoteService = VoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(vote_schema_1.Vote.name)),
    __param(1, (0, mongoose_1.InjectModel)(candidate_schema_1.Candidate.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], VoteService);
//# sourceMappingURL=vote.service.js.map