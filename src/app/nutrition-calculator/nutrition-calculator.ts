import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NutritionService } from '../services/nutrition-service';

@Component({
  selector: 'app-nutrition-calculator',
  imports: [ReactiveFormsModule],
  templateUrl: './nutrition-calculator.html',
  styleUrl: './nutrition-calculator.css',
})
export class NutritionCalculator {
  step = 0;
  stepControls = [
    ['fruitsVeggies', 'carbs', 'proteins'],
    ['fats', 'sugar', 'salt'],
    ['calcium', 'junk', 'water'],
  ];


  constructor(private nutritionService:NutritionService){}

  next() {
    const controls = this.stepControls[this.step];
    let valid = true;
    for (let c of controls) {
      if (this.nutritionForm.get(c)?.invalid) {
        valid = false;
      }
    }
    if (valid) {
      this.step++;
    } else {
      alert('Please fill all fields correctly before proceeding!');
    }
  }
  prev() {
    this.step--;
  }

  nutritionForm = new FormGroup({
    fruitsVeggies: new FormControl('',Validators.required),
    carbs: new FormControl('', Validators.required),
    proteins: new FormControl('', Validators.required),
    fats: new FormControl('', Validators.required),
    sugar: new FormControl('', Validators.required),
    salt: new FormControl('', Validators.required),
    calcium: new FormControl('', Validators.required),
    junk: new FormControl('', Validators.required),
    water: new FormControl('', Validators.required),
  });

  onSubmit() {
    const controls = this.stepControls[this.step];
    let valid = true;
    for (let c of controls) {
      if (this.nutritionForm.get(c)?.invalid) {
        valid = false;
      }
    }
    if (!valid) {
      alert('Please fill all fields correctly before proceeding!');
      return;
    }

    this.nutritionService.calculateNutritionLevel(this.nutritionForm).subscribe({
      next:(res)=>{
        console.log(res);
        alert(res.message);
      },
      error:(err)=>{
        console.error("An error occured while computing nutrition",err);
      }
    })
    
  }
}
