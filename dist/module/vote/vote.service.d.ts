import { Model } from 'mongoose';
import { CandidateDocument } from 'src/shared/db/candidate.schema';
import { Vote, VoteDocument } from 'src/shared/db/vote.schema';
export declare class VoteService {
    private voteModel;
    private candidateModel;
    constructor(voteModel: Model<VoteDocument>, candidateModel: Model<CandidateDocument>);
    castVote(candidate_id: string, student_id: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, Vote> & Vote & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, Vote> & Vote & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
    checkIfVoteCastedForPosition(candidate_id: string, student_id: string): Promise<void>;
}
