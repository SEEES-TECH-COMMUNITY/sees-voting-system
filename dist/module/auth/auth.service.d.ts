import { Model } from 'mongoose';
import { FingerPrint } from 'src/shared/db/fingerprint.schema';
import { Student, StudentDocument } from 'src/shared/db/students.schema';
import { LoginDto, loginUserByHashDto } from 'src/shared/dto/creat.dto';
import { CryptoService } from 'src/shared/services/crypto.service';
export declare class AuthService {
    private studentModel;
    private fingerPrintModel;
    private cryptoService;
    constructor(studentModel: Model<StudentDocument>, fingerPrintModel: Model<FingerPrint>, cryptoService: CryptoService);
    loginUser(body: LoginDto): Promise<false | (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)>;
    validateUser(id: string, fingerprint: string): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Student> & Student & {
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
    loginUserByHash(payload: loginUserByHashDto): Promise<false | (import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Student> & Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>)>;
}
