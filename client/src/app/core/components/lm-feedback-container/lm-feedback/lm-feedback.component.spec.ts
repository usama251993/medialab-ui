import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmFeedbackComponent } from './lm-feedback.component';

describe('LmFeedbackComponent', () => {
  let component: LmFeedbackComponent;
  let fixture: ComponentFixture<LmFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
