import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPricingPlanComponent } from './cd-pricing-plan.component';

describe('CdPricingPlanComponent', () => {
  let component: CdPricingPlanComponent;
  let fixture: ComponentFixture<CdPricingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdPricingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPricingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
