import { AuthService } from 'src/module/auth/auth.service';
export type JwtPayload = {
    identifier: string;
    fingerprint: string;
};
export type SessionData = {
    userId: string;
    identifier: string;
};
declare const AuthTokenStrategy_base: new (...args: any[]) => any;
export declare class AuthTokenStrategy extends AuthTokenStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(payload: JwtPayload): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../db/students.schema").Student> & import("../db/students.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, import("../db/students.schema").Student> & import("../db/students.schema").Student & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
}
export {};
