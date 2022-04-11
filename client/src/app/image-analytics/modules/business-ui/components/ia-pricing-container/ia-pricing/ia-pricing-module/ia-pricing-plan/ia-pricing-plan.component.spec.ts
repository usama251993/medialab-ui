import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaPricingPlanComponent } from './ia-pricing-plan.component';

describe('IaPricingPlanComponent', () => {
  let component: IaPricingPlanComponent;
  let fixture: ComponentFixture<IaPricingPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaPricingPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaPricingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
