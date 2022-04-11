import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmFeedbackContainerComponent } from './lm-feedback-container.component';

describe('LmFeedbackContainerComponent', () => {
  let component: LmFeedbackContainerComponent;
  let fixture: ComponentFixture<LmFeedbackContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmFeedbackContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmFeedbackContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
