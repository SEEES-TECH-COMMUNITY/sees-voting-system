import { StudentsService } from './students.service';
import { CreateDto } from 'src/shared/dto/creat.dto';
import { Request } from 'express';
export declare class StudentsController {
    private service;
    constructor(service: StudentsService);
    findUser(req: Request): import("../../shared/db/students.schema").Student;
    createStudent(payload: CreateDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../shared/db/students.schema").Student> & import("../../shared/db/students.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("../../shared/db/students.schema").Student> & import("../../shared/db/students.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
