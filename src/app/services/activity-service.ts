import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {

  private baseUrl=environment.backendUrl;
  constructor(private http:HttpClient){}

  childernActivity(form:FormGroup):Observable<any>{
    return this.http.post(`${this.baseUrl}/children_activity`,form.value);
  }

  adultActivity(form:FormGroup):Observable<any>{
    return this.http.post(`${this.baseUrl}/adult_activity`,form.value);
  }

  seniorActivity(form:FormGroup):Observable<any>{
    return this.http.post(`${this.baseUrl}/senior_activity`,form.value);
  }
} 
