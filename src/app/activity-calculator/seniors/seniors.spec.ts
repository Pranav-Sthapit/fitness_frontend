import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Seniors } from './seniors';

describe('Seniors', () => {
  let component: Seniors;
  let fixture: ComponentFixture<Seniors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Seniors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Seniors);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
