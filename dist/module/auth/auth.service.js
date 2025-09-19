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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const fingerprint_schema_1 = require("../../shared/db/fingerprint.schema");
const students_schema_1 = require("../../shared/db/students.schema");
const argon2 = require("argon2");
const crypto_service_1 = require("../../shared/services/crypto.service");
let AuthService = class AuthService {
    constructor(studentModel, fingerPrintModel, cryptoService) {
        this.studentModel = studentModel;
        this.fingerPrintModel = fingerPrintModel;
        this.cryptoService = cryptoService;
    }
    async loginUser(body) {
        console.log(body);
        const student = await this.studentModel
            .findOne({ mat_number: body.mat_number })
            .select('+password');
        if (!student) {
            return false;
        }
        console.log(student);
        if (!(await argon2.verify(student.password, body.password))) {
            console.log('wrong password');
            return false;
        }
        if (!body.finger_print) {
            return false;
        }
        const finger = await this.fingerPrintModel.findOne({
            finger_print: body.finger_print,
        });
        console.log(finger);
        if (finger) {
            if (finger.student_id.toString() !== student._id.toString()) {
                return false;
            }
        }
        else {
            const studentFinger = await this.fingerPrintModel.findOne({
                student_id: student._id,
            });
            if (studentFinger && studentFinger.finger_print !== body.finger_print) {
                return false;
            }
            if (!studentFinger) {
                const newFinger = new this.fingerPrintModel({
                    student_id: student._id,
                    finger_print: body.finger_print,
                });
                await newFinger.save();
            }
        }
        return student;
    }
    async validateUser(id, fingerprint) {
        const student = await this.studentModel.findById(id);
        if (!student) {
            return null;
        }
        const finger = await this.fingerPrintModel.findOne({
            finger_print: fingerprint,
            student_id: id,
        });
        if (!finger) {
            return null;
        }
        return student;
    }
    async loginUserByHash(payload) {
        const { finger_print, hash } = payload;
        const decrypted = await this.cryptoService.decryptHash(hash);
        if (!decrypted) {
            return false;
        }
        const { mat_number, password } = decrypted;
        const student = await this.studentModel
            .findOne({ mat_number })
            .select('+password');
        if (!student) {
            return null;
        }
        if (!(await argon2.verify(student.password, password))) {
            console.log('wrong password');
            return false;
        }
        if (!finger_print) {
            return false;
        }
        const finger = await this.fingerPrintModel.findOne({
            finger_print,
        });
        if (finger) {
            if (finger.student_id.toString() !== student._id.toString()) {
                return false;
            }
        }
        else {
            const studentFinger = await this.fingerPrintModel.findOne({
                student_id: student._id,
            });
            if (studentFinger && studentFinger.finger_print !== finger_print) {
                return false;
            }
            if (!studentFinger) {
                const newFinger = new this.fingerPrintModel({
                    student_id: student._id,
                    finger_print: finger_print,
                });
                await newFinger.save();
            }
        }
        return student;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(students_schema_1.Student.name)),
    __param(1, (0, mongoose_1.InjectModel)(fingerprint_schema_1.FingerPrint.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        crypto_service_1.CryptoService])
], AuthService);
//# sourceMappingURL=auth.service.js.map