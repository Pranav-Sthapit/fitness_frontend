import { TestBed } from '@angular/core/testing';

import { Signing } from './signing';

describe('Signing', () => {
  let service: Signing;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Signing);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
