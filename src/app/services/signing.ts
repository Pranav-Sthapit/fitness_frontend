import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { email } from '@angular/forms/signals';

@Injectable({
  providedIn: 'root',
})
export class Signing {
  private baseUrl=environment.backendUrl;

  constructor(private http:HttpClient){}

  login(username:string,password:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/login`,{username,password});
  }

  register(firstName:string,lastName:string,email:string,username:string,password:string):Observable<any>{
    return this.http.post(`${this.baseUrl}/register`,{firstName,lastName,email,username,password});
  }
}
