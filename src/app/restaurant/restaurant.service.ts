import { RestaurantData } from './restaurant-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private baseUrl = 'https://angularrestaruntapp.herokuapp.com'
  // private baseUrl = "http://localhost:8080"

  constructor(private http : HttpClient) { }

  private httpOptions = {
    headers : new HttpHeaders().set('Content-Type','application/json').set('auth-token',localStorage.getItem('token')!)
  };

  getAllData():Observable<RestaurantData[]>{
    return this.http.get<any>(`${this.baseUrl}/api/restaurant`).pipe(map((res:any)=>{
      return res;
    }))
  }

  getDetails(id : any){
    return this.http.get(`${this.baseUrl}/api/restaurant/${id}`);
  }

  addRestaurant(data:any){
    return this.http.post<any>(`${this.baseUrl}/api/restaurant`, data , this.httpOptions)
  }

  editRestaurant(data : any, id: String) {
    return this.http.put<any>(
      `${this.baseUrl}/api/restaurant/${id}`,
      data,
      this.httpOptions
    );
  }

  deleteRestaurant(id: String) {
    return this.http.delete<any>(
      `${this.baseUrl}/api/restaurant/${id}`,
      this.httpOptions
    );
  }
}
