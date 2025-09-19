import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { StudentsService } from './students.service';
import { CreateDto, CreateStudentBulkDto } from 'src/shared/dto/creat.dto';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Request } from 'express';

@Controller('students')
export class StudentsController {
  constructor(private service: StudentsService) {}

  // @Get('')
  // getStudents() {
  //   return this.service.getStudents();
  // }
  @Post('bulk-create')
  createBulkStudents(@Body() payload: CreateStudentBulkDto) {
    return this.service.createBulkStudents(payload.students);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  findUser(@Req() req: Request) {
    return req.user;
  }

  @Post('create')
  async createStudent(@Body() payload: CreateDto) {
    return await this.service.createStudent(payload);
  }
}
