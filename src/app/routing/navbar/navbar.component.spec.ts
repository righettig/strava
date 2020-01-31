import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/features/auth/auth.service';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let mockAuthService;

  beforeEach(async(() => {
    mockAuthService = jasmine.createSpyObj({ user: { isPremium: false } });

    TestBed.configureTestingModule({
      imports: [
        SharedModule, 
        RouterTestingModule
      ],
      declarations: [ NavbarComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
