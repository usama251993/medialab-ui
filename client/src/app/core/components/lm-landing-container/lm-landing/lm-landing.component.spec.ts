import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmLandingComponent } from './lm-landing.component';

describe('LmLandingComponent', () => {
  let component: LmLandingComponent;
  let fixture: ComponentFixture<LmLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
