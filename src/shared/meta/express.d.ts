import 'express';
import { Student } from '../db/students.schema';

// **** Declaration Merging **** //

declare module 'express' {
  export interface Request {
    token: string;

    user: Student;
  }
}
