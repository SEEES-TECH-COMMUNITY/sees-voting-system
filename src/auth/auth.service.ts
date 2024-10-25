import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { OAuth2Client } from 'google-auth-library';
import { Model } from 'mongoose';
import { ENV } from 'src/config/env';
import { Student, StudentDocument } from 'src/shared/db/students.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}

  async verifyIdToken(token: string): Promise<boolean | Student> {
    const client = new OAuth2Client(
      ENV.GOOGLE_CLIENT_ID,
      ENV.GOOGLE_CLIENT_SECRET,
    );
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: ENV.GOOGLE_CLIENT_ID,
    });
    const data = ticket.getPayload();
    console.log(data);
    if (!data) {
      return false;
    }
    if(data.email.split('@')[1] !== 'eng.uniben.edu') {
      return false;
    }
    return this.singIn(data.email);
  }
  async singIn(email: string) {

    const [first_name, last_name] = email.split('@')[0].split('.');
    const student = await this.studentModel.findOne({
      $and: [
        { full_name: { $regex: new RegExp(`${first_name}`, 'i') } },
        { full_name: { $regex: new RegExp(`${last_name}`, 'i') } },
      ],
    });
    console.log({ student });
    if (!student) {
      return false;
    }

    return student;
  }
}
