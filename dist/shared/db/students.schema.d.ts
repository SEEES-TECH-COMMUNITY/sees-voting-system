import { HydratedDocument } from 'mongoose';
export type StudentDocument = HydratedDocument<Student>;
export declare class Student {
    id: string;
    password: string;
    mat_number: string;
    phone_number: string;
    level: string;
}
export declare const StudentSchema: import("mongoose").Schema<Student, import("mongoose").Model<Student, any, any, any, import("mongoose").Document<unknown, any, Student> & Student & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Student, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Student>> & import("mongoose").FlatRecord<Student> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v?: number;
}>;
