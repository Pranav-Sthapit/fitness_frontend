import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityCalculator } from './activity-calculator';

describe('ActivityCalculator', () => {
  let component: ActivityCalculator;
  let fixture: ComponentFixture<ActivityCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivityCalculator]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
