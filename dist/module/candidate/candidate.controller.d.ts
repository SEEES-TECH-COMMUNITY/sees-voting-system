import { CandidateService } from './candidate.service';
export declare class CandidateController {
    private service;
    constructor(service: CandidateService);
    getCandidates(): Promise<any[]>;
    getResults(isFull: boolean): Promise<any[]>;
}
