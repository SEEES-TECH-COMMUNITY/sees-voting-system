import { Model } from 'mongoose';
import { Student, StudentDocument } from 'src/shared/db/students.schema';
import { CreateDto } from 'src/shared/dto/creat.dto';
import { WhatsappService } from '../whatsapp/whatsapp.service';
export declare class StudentsService {
    private studentModel;
    private whatsappService;
    constructor(studentModel: Model<StudentDocument>, whatsappService: WhatsappService);
    createStudent(payload: CreateDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    createBulkStudents(students: Array<CreateDto>): Promise<{
        success: boolean;
        student: CreateDto;
    }>[];
    getStudents(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, "find", {}>;
    generateRandomPassword(): string;
}
