import { TestBed, async, inject } from '@angular/core/testing';

import { ActivityEditGuard } from './activity-edit.guard';
import { RouterTestingModule } from '@angular/router/testing';

describe('ActivityEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [ActivityEditGuard]
    });
  });

  it('should ...', inject([ActivityEditGuard], (guard: ActivityEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
