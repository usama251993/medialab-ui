import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmLoginComponent } from './lm-login.component';

describe('LmLoginComponent', () => {
  let component: LmLoginComponent;
  let fixture: ComponentFixture<LmLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
