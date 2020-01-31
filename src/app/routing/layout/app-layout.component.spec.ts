import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutComponent } from './app-layout.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthService } from 'src/app/features/auth/auth.service';

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;
  let mockAuthService;
  
  beforeEach(async(() => {
    mockAuthService = jasmine.createSpyObj({ user: { isPremium: false } });
    
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule],
      declarations: [ AppLayoutComponent, NavbarComponent ],
      providers: [
        { provide: AuthService, useValue: mockAuthService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
