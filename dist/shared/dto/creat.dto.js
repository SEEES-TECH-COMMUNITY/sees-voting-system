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
exports.CreateCandidateBulkDto = exports.CreateCandidateDto = exports.CreateStudentBulkDto = exports.LoginDto = exports.CreateDto = void 0;
const class_validator_1 = require("class-validator");
const positions_1 = require("../constants/positions");
class CreateDto {
}
exports.CreateDto = CreateDto;
__decorate([
    (0, class_validator_1.IsPhoneNumber)('NG'),
    __metadata("design:type", String)
], CreateDto.prototype, "phone_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDto.prototype, "mat_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDto.prototype, "level", void 0);
class LoginDto {
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "mat_number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], LoginDto.prototype, "finger_print", void 0);
class CreateStudentBulkDto {
}
exports.CreateStudentBulkDto = CreateStudentBulkDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateStudentBulkDto.prototype, "students", void 0);
class CreateCandidateDto {
}
exports.CreateCandidateDto = CreateCandidateDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "full_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "level", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(positions_1.Position),
    __metadata("design:type", String)
], CreateCandidateDto.prototype, "position", void 0);
class CreateCandidateBulkDto {
}
exports.CreateCandidateBulkDto = CreateCandidateBulkDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateCandidateBulkDto.prototype, "candidates", void 0);
//# sourceMappingURL=creat.dto.js.map