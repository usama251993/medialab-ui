// import { Injectable } from '@angular/core'
// import { HttpErrorResponse } from '@angular/common/http'
// import { Observable, of, throwError } from 'rxjs'

// import { LmErrorService } from '../lm-error.service'

// export type LmHandleError = <T>(operation?: string, result?: T) =>
//   (error: HttpErrorResponse) =>
//     Observable<T>

// @Injectable({
//   providedIn: 'root'
// })
// export class LmHttpErrorHandlerService {

//   constructor(
//     private _errorService: LmErrorService
//   ) { }

//   createErrorHandler = (serviceName = '') =>
//     <T>(operation = 'operation', result = <T>{}) =>
//       this.handleError(serviceName, operation, result)

//   handleError<T>(serviceName = '', operation = 'operation', result = <T>{}) {
//     return (error: HttpErrorResponse): Observable<T> => {
//       console.error(error)
//       const message = (error.error instanceof ErrorEvent)
//         ? error.error.message
//         : `{ error code: ${error.status}, body: "${error.message}" }`
//       this._errorService.sError = `${serviceName} -> ${operation} failed.\n  Message: ${message}`
//       return throwError(error)
//     }
//   }
// }

// // Reference: https://grokonez.com/frontend/angular/angular-6/error-handler-angular-6-httpclient-catcherror-retry-with-node-js-express-example
