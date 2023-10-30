import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getAllproduct():Observable<any>{
    return this.http.get(`${environment.apiUrl}movie/top_rated?api_key=a79c1374f7a2908bba14c24cc359052e&&The%20Godfather`)
  }
}
