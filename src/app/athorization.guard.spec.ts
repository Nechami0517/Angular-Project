import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { athorizationGuard } from './athorization.guard';

describe('athorizationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => athorizationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
