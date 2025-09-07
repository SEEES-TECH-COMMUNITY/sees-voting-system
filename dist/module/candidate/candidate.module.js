"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateModule = void 0;
const common_1 = require("@nestjs/common");
const candidate_controller_1 = require("./candidate.controller");
const candidate_service_1 = require("./candidate.service");
const mongoose_1 = require("@nestjs/mongoose");
const students_schema_1 = require("../../shared/db/students.schema");
const candidate_schema_1 = require("../../shared/db/candidate.schema");
const vote_schema_1 = require("../../shared/db/vote.schema");
let CandidateModule = class CandidateModule {
};
exports.CandidateModule = CandidateModule;
exports.CandidateModule = CandidateModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: students_schema_1.Student.name, schema: students_schema_1.StudentSchema },
                { name: candidate_schema_1.Candidate.name, schema: candidate_schema_1.CandidateSchema },
                { name: vote_schema_1.Vote.name, schema: vote_schema_1.VoteSchema },
            ]),
        ],
        providers: [candidate_service_1.CandidateService],
        controllers: [candidate_controller_1.CandidateController]
    })
], CandidateModule);
//# sourceMappingURL=candidate.module.js.map