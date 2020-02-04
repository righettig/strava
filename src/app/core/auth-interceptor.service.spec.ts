import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth-interceptor.service';

describe('AuthInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [{
      provide: AuthInterceptor, useClass: AuthInterceptor
    }]
  }));

  it('should be created', () => {
    const service: AuthInterceptor = TestBed.get(AuthInterceptor);
    expect(service).toBeTruthy();
  });
});
