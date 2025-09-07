import mongoose, { HydratedDocument } from 'mongoose';
import { Student } from './students.schema';
import { Candidate } from './candidate.schema';
export type VoteDocument = HydratedDocument<Vote>;
export declare class Vote {
    id: string;
    student_id: string;
    candidate_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    students: Array<Student>;
    candidates: Array<Candidate>;
}
export declare const VoteSchema: mongoose.Schema<Vote, mongoose.Model<Vote, any, any, any, mongoose.Document<unknown, any, Vote> & Vote & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Vote, mongoose.Document<unknown, {}, mongoose.FlatRecord<Vote>> & mongoose.FlatRecord<Vote> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
