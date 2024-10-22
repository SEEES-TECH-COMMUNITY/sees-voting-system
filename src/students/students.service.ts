import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/shared/db/students.schema';
import { CreateDto } from 'src/shared/dto/creat.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocument>,
  ) {}
  createStudent(student: CreateDto) {
    return this.studentModel.create(student);
  }
  createBulkStudents(students: Array<CreateDto>) {
    return this.studentModel.insertMany(students);
  }
  getStudents() {
    return this.studentModel.find();
  }
}
