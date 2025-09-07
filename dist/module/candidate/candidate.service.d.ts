import { Model } from 'mongoose';
import { Candidate, CandidateDocument } from 'src/shared/db/candidate.schema';
import { CreateCandidateDto } from 'src/shared/dto/creat.dto';
export declare class CandidateService {
    private candidateModel;
    constructor(candidateModel: Model<CandidateDocument>);
    createCandidate(candidate: CreateCandidateDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>>;
    createCandidateBulk(candidates: Array<CreateCandidateDto>): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, Omit<CreateCandidateDto, "_id">>[]>;
    checkCandidateExists(full_name: string, level: string): Promise<void>;
    updateCandidate(candidate_id: string, update: CreateCandidateDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, "findOneAndUpdate", {}>;
    deleteCandidate(candidate_id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }> & import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    } & Required<{
        _id: import("mongoose").Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, Candidate> & Candidate & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, "findOneAndDelete", {}>;
    getAllCandidates(): Promise<any[]>;
    getResults(isFull?: boolean): Promise<any[]>;
}
