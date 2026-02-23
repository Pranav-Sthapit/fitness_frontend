import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessPredictor } from './fitness-predictor';

describe('FitnessPredictor', () => {
  let component: FitnessPredictor;
  let fixture: ComponentFixture<FitnessPredictor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitnessPredictor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessPredictor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
