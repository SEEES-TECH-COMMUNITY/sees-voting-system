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
exports.CandidateService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const positions_1 = require("../../shared/constants/positions");
const candidate_schema_1 = require("../../shared/db/candidate.schema");
let CandidateService = class CandidateService {
    constructor(candidateModel) {
        this.candidateModel = candidateModel;
    }
    async createCandidate(candidate) {
        await this.checkCandidateExists(candidate.full_name, candidate.level);
        const newCandidate = new this.candidateModel(candidate);
        return newCandidate.save();
    }
    async createCandidateBulk(candidates) {
        const createdCandidates = [];
        for (const candidate of candidates) {
            await this.checkCandidateExists(candidate.full_name, candidate.level);
            const newCandidate = new this.candidateModel(candidate);
            createdCandidates.push(await newCandidate.save());
        }
        return createdCandidates;
    }
    async checkCandidateExists(full_name, level) {
        const candidate = await this.candidateModel.findOne({
            full_name,
            level,
        });
        if (candidate) {
            throw new common_1.BadRequestException('Candidate Already Exists');
        }
    }
    updateCandidate(candidate_id, update) {
        return this.candidateModel.findByIdAndUpdate(candidate_id, update, {
            new: true,
        });
    }
    deleteCandidate(candidate_id) {
        return this.candidateModel.findByIdAndDelete(candidate_id);
    }
    async getAllCandidates() {
        const positionOrder = Object.values(positions_1.Position);
        const candidates = await this.candidateModel
            .aggregate([
            {
                $addFields: {
                    positionRank: {
                        $indexOfArray: [positionOrder, '$position'],
                    },
                },
            },
            {
                $sort: { positionRank: 1 },
            },
            {
                $project: { positionRank: 0 },
            },
        ])
            .exec();
        return candidates.map((candidate) => {
            candidate.id = candidate._id;
            delete candidate._id;
            delete candidate.__v;
            return candidate;
        });
    }
    async getResults(isFull = false) {
        const positionOrder = Object.values(positions_1.Position);
        const query = isFull
            ? [
                {
                    $lookup: {
                        from: 'votes',
                        localField: '_id',
                        foreignField: 'candidate_id',
                        as: 'votes',
                    },
                },
                {
                    $addFields: {
                        voteCount: {
                            $size: '$votes',
                        },
                        positionRank: {
                            $indexOfArray: [positionOrder, '$position'],
                        },
                    },
                },
                {
                    $lookup: {
                        from: 'students',
                        localField: 'votes.student_id',
                        foreignField: '_id',
                        as: 'votes.student',
                    },
                },
                {
                    $group: {
                        _id: '$_id',
                        full_name: { $first: '$full_name' },
                        position: { $first: '$position' },
                        votes: { $push: '$votes' },
                        voteCount: { $first: '$voteCount' },
                        positionRank: { $first: '$positionRank' },
                    },
                },
                {
                    $sort: { positionRank: 1 },
                },
                {
                    $project: { positionRank: 0 },
                },
            ]
            : [
                {
                    $lookup: {
                        from: 'votes',
                        localField: '_id',
                        foreignField: 'candidate_id',
                        as: 'votes',
                    },
                },
                {
                    $addFields: {
                        voteCount: {
                            $size: '$votes',
                        },
                        positionRank: {
                            $indexOfArray: [positionOrder, '$position'],
                        },
                    },
                },
                { $sort: { positionRank: 1 } },
                {
                    $project: { positionRank: 0 },
                },
            ];
        const results = await this.candidateModel.aggregate(query).exec();
        return results.map((result) => {
            result.id = result._id;
            delete result._id;
            delete result.__v;
            if (!isFull) {
                delete result.votes;
            }
            return result;
        });
    }
};
exports.CandidateService = CandidateService;
exports.CandidateService = CandidateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(candidate_schema_1.Candidate.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CandidateService);
//# sourceMappingURL=candidate.service.js.map