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
exports.VoteSchema = exports.Vote = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Vote = class Vote {
};
exports.Vote = Vote;
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.ObjectId,
        required: true,
    }),
    __metadata("design:type", String)
], Vote.prototype, "student_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.default.Schema.ObjectId,
        required: true,
    }),
    __metadata("design:type", String)
], Vote.prototype, "candidate_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        required: true,
        default: Date.now,
    }),
    __metadata("design:type", Date)
], Vote.prototype, "created_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Vote.prototype, "updated_at", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], Vote.prototype, "deleted_at", void 0);
exports.Vote = Vote = __decorate([
    (0, mongoose_1.Schema)()
], Vote);
exports.VoteSchema = mongoose_1.SchemaFactory.createForClass(Vote);
exports.VoteSchema.virtual('students', {
    ref: 'Student',
    localField: 'student_id',
    foreignField: '_id',
});
exports.VoteSchema.virtual('candidates', {
    ref: 'Candidate',
    localField: 'candidate_id',
    foreignField: '_id',
});
exports.VoteSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
exports.VoteSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    },
});
//# sourceMappingURL=vote.schema.js.map