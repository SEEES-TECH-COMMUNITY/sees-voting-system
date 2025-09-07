import { HttpService as NestHttpService } from '@nestjs/axios';
import { Method } from 'axios';
type HttpResponse<T> = {
    success: boolean;
    httpStatus: number;
    title: string;
    message: string;
    responseData: T;
};
export declare class HttpService {
    private readonly httpService;
    readonly retryCount = 3;
    readonly retryWait = 1000;
    private readonly logger;
    constructor(httpService: NestHttpService);
    private isNullOrUndefined;
    request<T>({ url, method, data, headers, }: {
        url: string;
        method: Method;
        data?: any;
        headers?: any;
    }): Promise<HttpResponse<T>>;
    private cleanHeaders;
}
export {};
