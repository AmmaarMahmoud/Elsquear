import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, of, retry, throwError } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from '../auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(
     private identityService: AuthService
     ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // let handled: boolean = false;

   
    

    const isApiUrl = request.url.startsWith(environment.baseUrl);
    const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzljMTM3NGY3YTI5MDhiYmExNGMyNGNjMzU5MDUyZSIsInN1YiI6IjY1M2ZkMjMwY2M5NjgzMDEyY2Y1MTdkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7yjcbBYqeNhwWDHC9C7HJMI_vQU2GhZaPrJR-NEZz-A'
    if(token){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
    });
    }
    return next.handle(request)

  }

}
