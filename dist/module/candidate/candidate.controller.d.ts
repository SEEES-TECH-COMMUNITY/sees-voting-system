import { CandidateService } from './candidate.service';
import { CreateCandidateBulkDto } from '../../shared/dto/creat.dto';
export declare class CandidateController {
    private service;
    constructor(service: CandidateService);
    createCandidateBulk(payload: CreateCandidateBulkDto): Promise<any[]>;
    getCandidates(): Promise<any[]>;
    getResults(isFull: boolean): Promise<any[]>;
}
