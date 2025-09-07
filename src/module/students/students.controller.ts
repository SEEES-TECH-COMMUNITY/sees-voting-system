import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

import { StudentsService } from './students.service';
import { CreateDto, CreateStudentBulkDto } from 'src/shared/dto/creat.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { Request } from 'express';

@Controller('students')
export class StudentsController {
  constructor(private service: StudentsService) {}

  // @Get('')
  // getStudents() {
  //   return this.service.getStudents();
  // }

  @UseGuards(AuthGuard)
  @Get('me')
  findUser(@Req() req: Request) {
    return req.user;
  }
}
