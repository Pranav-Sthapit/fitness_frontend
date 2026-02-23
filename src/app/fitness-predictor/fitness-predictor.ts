import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FitnessService } from '../services/fitness-service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-fitness-predictor',
  imports: [ReactiveFormsModule],
  templateUrl: './fitness-predictor.html',
  styleUrl: './fitness-predictor.css',
})
export class FitnessPredictor {
  step = 0;
  stepControls = [
    [],
    ['age', 'weight', 'height', 'gender'], // step 1
    ['heartRate', 'bloodPressure', 'sleepHours', 'smoke'], // step 2
    ['nutrition', 'activity'],
  ];


  constructor(private fitnessService:FitnessService,private router:Router){}


  next() {
    const controls = this.stepControls[this.step];
    let valid = true;

    for (let c of controls) {
      if (this.predictionForm.get(c)?.invalid) {
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

  predictionForm = new FormGroup({
    age: new FormControl('', [Validators.required, Validators.pattern(/^\d{2}$/)]),
    weight: new FormControl('', [Validators.required,  Validators.pattern(/^\d{2,3}(\.\d+)?$/),Validators.min(10), Validators.max(300)]),
    height: new FormControl('', [Validators.required, Validators.pattern(/^\d{2,3}(\.\d+)?$/), Validators.min(50), Validators.max(250)]),
    gender: new FormControl('', [Validators.required]),
    heartRate: new FormControl('', [Validators.required,Validators.pattern(/^\d+$/),Validators.min(20), Validators.max(180)]),
    bloodPressure: new FormControl('', [Validators.required,Validators.pattern(/^\d+$/),Validators.min(50), Validators.max(250)]),
    sleepHours: new FormControl('', [Validators.required, Validators.pattern(/^\d{1,2}(\.\d+)?$/) ,Validators.min(0), Validators.max(24)]),
    smoke: new FormControl('', Validators.required),
    nutrition: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(10)]),
    activity: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(5)]),
  });

  onSubmit() {
    this.fitnessService.predictFitness(this.predictionForm).subscribe({
      next:(res)=>{
        const result=res;
        this.router.navigate(['/result_box'],{state:{data:result}});
      },
      error:(err)=>console.error(err)
    })
  }
}
