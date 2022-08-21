import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.setLoading(true, request.url);
    return next
      .handle(request)
      .pipe(
        catchError((err) => {
          this.loaderService.setLoading(false, request.url);
          return err;
        })
      )
      .pipe(
        map((evt: any) => {
          if (evt instanceof HttpResponse) {
            this.loaderService.setLoading(false, request.url);
          }
          return evt;
        })
      );
  }
}
