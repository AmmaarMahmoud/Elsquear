import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiLink = 'Authenticate/';

  constructor(
    private ApiSvc: ApiService,
    private router: Router
  ) { }

  signup() {
    
  }

  login() {
    
  }


  authenticate(): boolean {
    return false;
  }


  logout() {
  }


}
