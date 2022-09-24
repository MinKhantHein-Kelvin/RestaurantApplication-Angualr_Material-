import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = "http://localhost:8080"

  constructor(private http : HttpClient) { }

  getAllData(){
    return this.http.get(`${this.baseUrl}/api/restaurant`).pipe(map((res:any)=>{
      return res;
    }))
  }

  getDetails(id : any){
    return this.http.get(`${this.baseUrl}/api/restaurant/${id}`);
  }
}
