"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
let HttpService = class HttpService {
    constructor(httpService) {
        this.httpService = httpService;
        this.retryCount = 3;
        this.retryWait = 1000;
        this.logger = new common_1.Logger('Http Service');
    }
    isNullOrUndefined(value) {
        return value === undefined || value === null;
    }
    async request({ url, method, data, headers = {
        'content-type': 'application/json',
        Accept: 'application/json',
    }, }) {
        try {
            this.logger.log('outbound_request', { url, method, data, headers });
            const $ = this.httpService
                .request({
                method: method,
                url,
                ...(method === 'get' || this.isNullOrUndefined(data) ? {} : { data }),
                headers,
            })
                .pipe((0, operators_1.retryWhen)((error) => {
                return error.pipe((0, operators_1.concatMap)((error, count) => {
                    if (count < this.retryCount) {
                        return (0, rxjs_1.of)(error);
                    }
                    return (0, rxjs_1.throwError)(() => error);
                }), (0, operators_1.delay)(this.retryWait));
            }));
            const response = await (0, rxjs_1.lastValueFrom)($);
            this.logger.log(response.data, response?.status, 'outbound_response');
            if (['enotfound'].some((m) => response.data?.message?.toLowerCase()?.includes(m))) {
                return {
                    success: false,
                    httpStatus: response?.status,
                    title: 'Oops',
                    message: 'One of our service is temporary unavailable. Try again in a moment',
                    responseData: null,
                };
            }
            console.log(response.status);
            if (response.status < 200 || response.status > 299) {
                return {
                    success: false,
                    httpStatus: response.status,
                    title: response.statusText,
                    message: null,
                    responseData: response.data,
                };
            }
            return {
                success: true,
                httpStatus: response.status,
                title: response.statusText,
                message: null,
                responseData: response.data,
            };
        }
        catch (exception) {
            this.logger.log('error', 'outbound_response', { url, method });
            if (exception?.response?.data) {
                const response = exception?.response;
                return {
                    success: false,
                    httpStatus: response.status,
                    title: response.statusText,
                    message: response?.message || response?.data?.message,
                    responseData: response.data,
                };
            }
            return {
                success: false,
                httpStatus: 503,
                title: 'Service is Down',
                message: 'One of our service is temporary down. We are on it, it would be back soon',
                responseData: null,
            };
        }
    }
    cleanHeaders(headers, remove = ['content-length', 'host']) {
        console.log('REQ HDRS', { headers });
        if (!headers) {
            return headers;
        }
        for (let index = 0; index < remove.length; index++) {
            delete headers[remove[index]];
        }
        return headers;
    }
};
exports.HttpService = HttpService;
exports.HttpService = HttpService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], HttpService);
//# sourceMappingURL=http.service.js.map