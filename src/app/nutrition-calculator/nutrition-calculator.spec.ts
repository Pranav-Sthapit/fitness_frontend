import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionCalculator } from './nutrition-calculator';

describe('NutritionCalculator', () => {
  let component: NutritionCalculator;
  let fixture: ComponentFixture<NutritionCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
