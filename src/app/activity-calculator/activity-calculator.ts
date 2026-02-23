import { Component } from '@angular/core';
import { Children } from './children/children';
import { Adults } from './adults/adults';
import { Seniors } from './seniors/seniors';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity-calculator',
  imports: [Children, Adults, Seniors, FormsModule],
  templateUrl: './activity-calculator.html',
  styleUrl: './activity-calculator.css',
})
export class ActivityCalculator {
  step = 0;
  age: string = '10'; // age as string
  ageError = '';
  ageNum=0;

  next() {
    // Trim whitespace
    const ageStr = this.age.trim();

    // Check if input is empty
    if (!ageStr) {
      this.ageError = 'Enter your age';
      return;
    }

    // Convert string to number
    this.ageNum = parseFloat(ageStr);

    // Check if conversion failed (not a number)
    if (isNaN(this.ageNum)) {
      this.ageError = 'Age must be a number';
      return;
    }

    // Check range
    if (this.ageNum < 10 || this.ageNum > 99) {
      this.ageError = 'Enter age between 10 and 99';
      return;
    }

    if(!/^\d{2}$/.test(ageStr)){
      this.ageError="age must be vaild";
      return;
    }

    // All good
    this.ageError = '';
    this.step++;
  }

  prev() {
    this.step--;
  }
}
