import mongoose, { HydratedDocument } from 'mongoose';
export type FingerPrintDocument = HydratedDocument<FingerPrint>;
export declare class FingerPrint {
    id: string;
    student_id: string;
    finger_print: string;
}
export declare const FingerPrintSchema: mongoose.Schema<FingerPrint, mongoose.Model<FingerPrint, any, any, any, mongoose.Document<unknown, any, FingerPrint> & FingerPrint & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, FingerPrint, mongoose.Document<unknown, {}, mongoose.FlatRecord<FingerPrint>> & mongoose.FlatRecord<FingerPrint> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
