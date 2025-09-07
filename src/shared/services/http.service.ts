import { HttpService as NestHttpService } from '@nestjs/axios'
import { Injectable, Logger } from '@nestjs/common'
import { Method } from 'axios'
import { lastValueFrom, of, throwError } from 'rxjs'
import { concatMap, delay, retryWhen } from 'rxjs/operators'

type HttpResponse<T> = {
  success: boolean
  httpStatus: number
  title: string
  message: string
  responseData: T
}

@Injectable()
export class HttpService {
  readonly retryCount = 3
  readonly retryWait = 1000
  private readonly logger: Logger = new Logger('Http Service')
  constructor(private readonly httpService: NestHttpService) {}
  private isNullOrUndefined(value: any) {
    return value === undefined || value === null
  }
  async request<T>({
    url,
    method,
    data,
    headers = {
      'content-type': 'application/json',
      Accept: 'application/json',
    },
  }: {
    url: string
    method: Method
    data?: any
    headers?: any
  }): Promise<HttpResponse<T>> {
    try {
      this.logger.log('outbound_request', { url, method, data, headers })
      const $ = this.httpService
        .request({
          method: method,
          url,
          ...(method === 'get' || this.isNullOrUndefined(data) ? {} : { data }),
          headers,
        })
        .pipe(
          retryWhen((error) => {
            return error.pipe(
              concatMap((error, count) => {
                if (count < this.retryCount) {
                  return of(error)
                }
                return throwError(() => error)
              }),
              delay(this.retryWait),
            )
          }),
        )

      const response = await lastValueFrom($)
      this.logger.log(response.data, response?.status, 'outbound_response')
      if (
        ['enotfound'].some((m) =>
          response.data?.message?.toLowerCase()?.includes(m),
        )
      ) {
        return {
          success: false,
          httpStatus: response?.status,
          title: 'Oops',
          message:
            'One of our service is temporary unavailable. Try again in a moment',
          responseData: null,
        }
      }
      console.log(response.status)
      if (response.status < 200 || response.status > 299) {
        return {
          success: false,
          httpStatus: response.status,
          title: response.statusText,
          message: null,
          responseData: response.data,
        }
      }
      return {
        success: true,
        httpStatus: response.status,
        title: response.statusText,
        message: null,
        responseData: response.data,
      }
    } catch (exception: any) {
      this.logger.log('error', 'outbound_response', { url, method })

      if (exception?.response?.data) {
        const response = exception?.response
        return {
          success: false,
          httpStatus: response.status,
          title: response.statusText,
          message: response?.message || response?.data?.message,
          responseData: response.data,
        }
      }

      return {
        success: false,
        httpStatus: 503,
        title: 'Service is Down',
        message:
          'One of our service is temporary down. We are on it, it would be back soon',
        responseData: null,
      }
    }
  }

  private cleanHeaders(headers: any, remove = ['content-length', 'host']) {
    console.log('REQ HDRS', { headers })
    if (!headers) {
      return headers
    }

    for (let index = 0; index < remove.length; index++) {
      delete headers[remove[index]]
    }

    return headers
  }
}
