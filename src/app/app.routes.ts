import { Routes } from '@angular/router';
import { Home } from './home/home';
import { SigningPage } from './signing-page/signing-page';
import { LandingPage } from './landing-page/landing-page';
import { ActivityCalculator } from './activity-calculator/activity-calculator';
import { NutritionCalculator } from './nutrition-calculator/nutrition-calculator';
import { FitnessPredictor } from './fitness-predictor/fitness-predictor';
import { ResultDisplay } from './result-display/result-display';

export const routes: Routes = [
    {path:'',component:LandingPage},
    {path:'signing',component:SigningPage},
    {path:'home',component:Home},
    {path:'home/activity_calculator',component:ActivityCalculator},
    {path:'home/nutrition_calculator',component:NutritionCalculator},
    {path:'home/fitness_predictor',component:FitnessPredictor},
    {path:'result_box',component:ResultDisplay},
];
