import { VoteService } from './vote.service';
export declare class VoteController {
    private service;
    constructor(service: VoteService);
    castVote(user_id: string, candidate_id: string): Promise<{
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, import("../../shared/db/vote.schema").Vote> & import("../../shared/db/vote.schema").Vote & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        }> & import("mongoose").Document<unknown, {}, import("../../shared/db/vote.schema").Vote> & import("../../shared/db/vote.schema").Vote & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v?: number;
        } & Required<{
            _id: import("mongoose").Types.ObjectId;
        }>;
    }>;
}
