import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class NutritionService {
  private baseUrl=environment.backendUrl;

  constructor(private http:HttpClient){}

  calculateNutritionLevel(form:FormGroup):Observable<any>{
    return this.http.post(`${this.baseUrl}/calculate_nutrition`,form.value);
  }
  
}
