import { TestBed, async, inject } from '@angular/core/testing';

import { PremiumUserGuard } from './premium-user.guard';

describe('PremiumUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PremiumUserGuard]
    });
  });

  it('should ...', inject([PremiumUserGuard], (guard: PremiumUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
