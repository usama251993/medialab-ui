import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPricingPlanComponent } from './ph-pricing-plan.component';

describe('PhPricingPlanComponent', () => {
  let component: PhPricingPlanComponent;
  let fixture: ComponentFixture<PhPricingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPricingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPricingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
