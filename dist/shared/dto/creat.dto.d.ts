import { Position } from '../constants/positions';
export declare class CreateDto {
    phone_number: string;
    mat_number: string;
    level: string;
}
export declare class LoginDto {
    mat_number: string;
    password: string;
    finger_print?: string;
}
export declare class CreateStudentBulkDto {
    students: Array<CreateDto>;
}
export declare class CreateCandidateDto {
    full_name: string;
    image: string;
    level: string;
    position: Position;
}
export declare class CreateCandidateBulkDto {
    candidates: Array<CreateCandidateDto>;
}
