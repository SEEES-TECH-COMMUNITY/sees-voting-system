import { Position } from '../constants/positions';
import mongoose, { HydratedDocument } from 'mongoose';
export type CandidateDocument = HydratedDocument<Candidate>;
export declare class Candidate {
    id: string;
    full_name: string;
    position: Position;
    image: string;
    level: string;
}
export declare const CandidateSchema: mongoose.Schema<Candidate, mongoose.Model<Candidate, any, any, any, mongoose.Document<unknown, any, Candidate> & Candidate & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Candidate, mongoose.Document<unknown, {}, mongoose.FlatRecord<Candidate>> & mongoose.FlatRecord<Candidate> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
