;
import { AccountModule } from './account/account.module';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './@core/@core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './@core/auth/interceptors/http-interceptor.interceptor';
import { ApiService } from 'src/app/@core/api.service';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadedInterceptor } from './@core/auth/interceptors/loaded.interceptor';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    AccountModule,
    CoreModule,
    NgxSpinnerModule.forRoot({
      type:"square-jelly-box",
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorInterceptor,
    multi: true
  },{
    provide: HTTP_INTERCEPTORS,
    useClass:LoadedInterceptor,
    multi:true
  }, ApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
