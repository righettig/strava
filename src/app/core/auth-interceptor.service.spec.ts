import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthInterceptor } from './auth-interceptor.service';
import { RacesApiService } from '../features/races/services/races-api.service';
import { AuthService } from '../features/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

describe('AuthInterceptor', () => {
  let httpMock: HttpTestingController;
  let service: RacesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        RacesApiService,
        { provide: AuthInterceptor, useClass: AuthInterceptor },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        { provide: AuthService, useValue: { user: { authToken: "FOO" } } }
      ]
    });

    service = TestBed.get(RacesApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: AuthInterceptor = TestBed.get(AuthInterceptor);
    expect(service).toBeTruthy();
  });

  it('should add an Authorization header', () => {
    // Observables don't fire unless we subscribe to them, 
    // so by subscribing to the getRaces function we're sending a HTTP GET request. 
    // As we're not concerned with the results of the request we can simply check that the request happened
    service.getRaces().subscribe();

    const httpRequest = httpMock.expectOne('api/races.json');
  
    expect(httpRequest.request.headers.has('Authorization')).toEqual(true);
    expect(httpRequest.request.headers.get('Authorization')).toBe(
      'FOO',
    );
  });
});
