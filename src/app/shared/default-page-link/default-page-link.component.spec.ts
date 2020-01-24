import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPageLinkComponent } from './default-page-link.component';

describe('DefaultPageLinkComponent', () => {
  let component: DefaultPageLinkComponent;
  let fixture: ComponentFixture<DefaultPageLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultPageLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultPageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
