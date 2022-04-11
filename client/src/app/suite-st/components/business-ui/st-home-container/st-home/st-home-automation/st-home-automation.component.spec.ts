import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeAutomationComponent } from './st-home-automation.component';

describe('StHomeAutomationComponent', () => {
  let component: StHomeAutomationComponent;
  let fixture: ComponentFixture<StHomeAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeAutomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
