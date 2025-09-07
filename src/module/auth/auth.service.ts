import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FingerPrint } from 'src/shared/db/fingerprint.schema';
import { Student, StudentDocument } from 'src/shared/db/students.schema';
import { LoginDto } from 'src/shared/dto/creat.dto';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
    @InjectModel(FingerPrint.name) private fingerPrintModel: Model<FingerPrint>,
  ) {}
  async loginUser(body: LoginDto) {
    const student = await this.studentModel
      .findOne({ mat_number: body.mat_number })
      .select('+password');
    if (!student) {
      return false;
    }
    if (!(await argon2.verify(student.password, body.password))) {
      return false;
    }
    if (!body.finger_print) {
      return false;
    }

    const finger = await this.fingerPrintModel.findOne({
      finger_print: body.finger_print,
    });
    if (finger) {
      if (finger.student_id !== student.id) {
        return false;
      }
    } else {
      const newFinger = new this.fingerPrintModel({
        student_id: student.id,
        finger_print: body.finger_print,
      });
      await newFinger.save();
    }

    return student;
  }

  async validateUser(id: string, fingerprint: string) {
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
}
