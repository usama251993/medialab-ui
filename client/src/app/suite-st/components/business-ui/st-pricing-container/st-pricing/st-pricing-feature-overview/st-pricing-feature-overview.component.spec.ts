import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPricingFeatureOverviewComponent } from './st-pricing-feature-overview.component';

describe('StPricingFeatureOverviewComponent', () => {
  let component: StPricingFeatureOverviewComponent;
  let fixture: ComponentFixture<StPricingFeatureOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPricingFeatureOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPricingFeatureOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
