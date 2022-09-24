import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = "http://localhost:8080"

  constructor(private http : HttpClient, private router : Router) { }

  register(user :any){
    return this.http.post<any>(`${this.baseUrl}/api/user/register`, user);
  }

  Login(user : any) {
    return this.http.post<any>(`${this.baseUrl}/api/user/login`, user);
  }

  LogOut() {
    localStorage.removeItem('token');
    this.router.navigate(['restaurant']);
  }
  LoggedIn() {
    return !!localStorage.getItem('token');
  }
}
