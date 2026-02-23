import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) {
   
  }

  goToNutritionCalculator() {
    this.router.navigate(['home/nutrition_calculator']);
  }

  goToActivityCalculator() {
    this.router.navigate(["home/activity_calculator"]);
  }

  goToFitnessPredictor() {
    this.router.navigate(["home/fitness_predictor"]);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(["/signing"]);
  }
}
