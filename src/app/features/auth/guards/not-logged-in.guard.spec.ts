import { TestBed, async, inject } from '@angular/core/testing';

import { NotLoggedInGuard } from './not-logged-in.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('NotLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [NotLoggedInGuard]
    });
  });

  it('should ...', inject([NotLoggedInGuard], (guard: NotLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
