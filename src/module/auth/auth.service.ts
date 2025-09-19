import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FingerPrint } from 'src/shared/db/fingerprint.schema';
import { Student, StudentDocument } from 'src/shared/db/students.schema';
import { LoginDto, loginUserByHashDto } from 'src/shared/dto/creat.dto';
import * as argon2 from 'argon2';
import { CryptoService } from 'src/shared/services/crypto.service';
import { ISessionHash } from 'src/shared/meta/IWebhook';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
    @InjectModel(FingerPrint.name) private fingerPrintModel: Model<FingerPrint>,
    private cryptoService: CryptoService,
  ) {}
  async loginUser(body: LoginDto) {
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
    } else {
      const newFinger = new this.fingerPrintModel({
        student_id: student._id,
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
  async loginUserByHash(payload: loginUserByHashDto) {
    const { finger_print, hash } = payload;
    const decrypted = await this.cryptoService.decryptHash<ISessionHash>(hash);
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
    console.log(finger);
    if (finger) {
      if (finger.student_id.toString() !== student._id.toString()) {
        return false;
      }
    } else {
      const newFinger = new this.fingerPrintModel({
        student_id: student._id,
        finger_print: finger_print,
      });
      await newFinger.save();
    }

    return student;
  }
}
