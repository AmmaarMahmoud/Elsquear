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
    private spinner: NgxSpinnerService,
     private identityService: AuthService
     ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let handled: boolean = false;
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);

    

    const isApiUrl = request.url.startsWith(environment.baseUrl);
    const token='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzljMTM3NGY3YTI5MDhiYmExNGMyNGNjMzU5MDUyZSIsInN1YiI6IjY1M2ZkMjMwY2M5NjgzMDEyY2Y1MTdkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7yjcbBYqeNhwWDHC9C7HJMI_vQU2GhZaPrJR-NEZz-A'
    if(token){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${token}` }
    });
    }
    
    return next.handle(request)
    .pipe(
      retry(1),
      catchError((returnedError) => {
        let errorMessage = null;

        if (returnedError.error instanceof ErrorEvent) {
          errorMessage = `هناك خطأ: ${returnedError.error.Message} `;
        } else if (returnedError instanceof HttpErrorResponse) {
          errorMessage = `هناك خطأ: ${returnedError.error.Message}`;
          handled = this.handleServerSideError(returnedError);
        } 

 
        if (!handled) {
          if (errorMessage) {
            return throwError(errorMessage);
          } else {
            return throwError("Unexpected problem occurred");
          }
        } else {
          return of(returnedError);
        }
      })
    )
  }

  private handleServerSideError(error: HttpErrorResponse): boolean {
    let handled: boolean = false;

    switch (error.status) {
      case 401:
        localStorage.removeItem('token')
        handled = true;
        break;
      case 403:
        localStorage.removeItem('token')
        handled = true;
        break;
    }

    return handled;
  }
}
