import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPricingPlanComponent } from './st-pricing-plan.component';

describe('StPricingPlanComponent', () => {
  let component: StPricingPlanComponent;
  let fixture: ComponentFixture<StPricingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPricingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPricingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
