import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { StudentsService } from './students.service';
import { CreateDto, CreateStudentBulkDto } from 'src/shared/dto/creat.dto';
import { GoogleGuard } from 'src/auth/guards/google.guard';
import { Request } from 'express';

@Controller('students')
export class StudentsController {
  constructor(private service: StudentsService) {}

  @Post('create')
  createStudent(@Body() payload: CreateDto) {
    return this.service.createStudent(payload);
  }

  @Post('create/bulk')
  createBulkStudents(@Body() payload: CreateStudentBulkDto) {
    return this.service.createBulkStudents(payload.students);
  }

  @Get('')
  getStudents() {
    return this.service.getStudents();
  }

  @UseGuards(GoogleGuard)
  @Get('me')
 findUser(@Req() req: Request) {
    return req.user;
  }
}
