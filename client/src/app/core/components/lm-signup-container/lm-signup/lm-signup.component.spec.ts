import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmSignupComponent } from './lm-signup.component';

describe('LmSignupComponent', () => {
  let component: LmSignupComponent;
  let fixture: ComponentFixture<LmSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
