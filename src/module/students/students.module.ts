import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from 'src/shared/db/students.schema';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService, AuthService],
})
export class StudentsModule {}
