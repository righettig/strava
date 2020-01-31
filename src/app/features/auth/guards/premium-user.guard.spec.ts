import { TestBed, async, inject } from '@angular/core/testing';

import { PremiumUserGuard } from './premium-user.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('PremiumUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [PremiumUserGuard]
    });
  });

  it('should ...', inject([PremiumUserGuard], (guard: PremiumUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
