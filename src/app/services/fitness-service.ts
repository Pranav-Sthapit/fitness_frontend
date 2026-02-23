import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FitnessService {
  private baseUrl=environment.backendUrl;

  constructor(private http:HttpClient){}

  predictFitness(form:FormGroup):Observable<any>{
    const userId=localStorage.getItem("userId");
    return this.http.post(`${this.baseUrl}/prediction/${userId}`,form.value);
  }
}
