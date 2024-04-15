import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gohomeGuard } from './gohome.guard';

describe('gohomeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gohomeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
