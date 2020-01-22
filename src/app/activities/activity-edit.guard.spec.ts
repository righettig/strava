import { TestBed, async, inject } from '@angular/core/testing';

import { ActivityEditGuard } from './activity-edit.guard';

describe('ActivityEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityEditGuard]
    });
  });

  it('should ...', inject([ActivityEditGuard], (guard: ActivityEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
