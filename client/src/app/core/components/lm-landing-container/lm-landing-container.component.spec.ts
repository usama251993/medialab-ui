import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmLandingContainerComponent } from './lm-landing-container.component';

describe('LmLandingContainerComponent', () => {
  let component: LmLandingContainerComponent;
  let fixture: ComponentFixture<LmLandingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmLandingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmLandingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
