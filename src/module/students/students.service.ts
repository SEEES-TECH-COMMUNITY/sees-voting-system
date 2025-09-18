import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/shared/db/students.schema';
import { CreateDto } from 'src/shared/dto/creat.dto';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import * as argon2 from 'argon2';
@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
    private whatsappService: WhatsappService,
  ) {}
  async createStudent(payload: CreateDto) {
    const password = this.generateRandomPassword();
    // wait 5 seconds before sending message
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await this.whatsappService.sendMessage(
      payload.phone_number,
      payload.mat_number,
      password,
    );
    const student = this.studentModel.create({
      mat_number: payload.mat_number,
      password: await argon2.hash(password),
      level: payload.level,
    });
    return student;
  }
  createBulkStudents(students: Array<CreateDto>) {
    return students.map(async (student) => {
      try {
        await this.createStudent(student);
        return {
          success: true,
          student,
        };
      } catch (error) {
        console.log('Error creating student:', error, student);
        return {
          success: false,
          student,
          error,
        };
      }
    });
  }
  getStudents() {
    return this.studentModel.find();
  }
  generateRandomPassword(): string {
    const length = 8;
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
    let password = '';
    for (let i = 0, n = charset.length; i < length; ++i) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
  }
}
