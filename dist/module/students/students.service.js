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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const students_schema_1 = require("../../shared/db/students.schema");
const whatsapp_service_1 = require("../whatsapp/whatsapp.service");
const argon2 = require("argon2");
let StudentsService = class StudentsService {
    constructor(studentModel, whatsappService) {
        this.studentModel = studentModel;
        this.whatsappService = whatsappService;
    }
    async createStudent(payload) {
        const password = this.generateRandomPassword();
        await this.whatsappService.sendMessage(payload.phone_number, payload.mat_number, password);
        const student = this.studentModel.create({
            mat_number: payload.mat_number,
            password: await argon2.hash(password),
            level: payload.level,
        });
        return student;
    }
    async createBulkStudents(students) {
        return this.studentModel.insertMany(students.map((student) => ({
            ...student,
            phone_number: student.phone_number.replace('+', ''),
        })));
    }
    getStudents() {
        return this.studentModel.find();
    }
    generateRandomPassword() {
        const length = 8;
        const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let password = '';
        for (let i = 0, n = charset.length; i < length; ++i) {
            password += charset.charAt(Math.floor(Math.random() * n));
        }
        return password;
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(students_schema_1.Student.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        whatsapp_service_1.WhatsappService])
], StudentsService);
//# sourceMappingURL=students.service.js.map