import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigningPage } from './signing-page';

describe('SigningPage', () => {
  let component: SigningPage;
  let fixture: ComponentFixture<SigningPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigningPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigningPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
