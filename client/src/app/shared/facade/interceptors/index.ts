import { Injectable } from '@angular/core'
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http'
import { Observable } from 'rxjs'
import { tap } from 'rxjs/operators'

@Injectable()
export class LmInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(_ => console.log(_))
    )
  }
}
