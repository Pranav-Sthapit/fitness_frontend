import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Adults } from './adults';

describe('Adults', () => {
  let component: Adults;
  let fixture: ComponentFixture<Adults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Adults]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Adults);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
