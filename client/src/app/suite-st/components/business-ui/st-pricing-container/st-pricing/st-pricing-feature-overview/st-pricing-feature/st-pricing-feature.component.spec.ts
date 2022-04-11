import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPricingFeatureComponent } from './st-pricing-feature.component';

describe('StPricingFeatureComponent', () => {
  let component: StPricingFeatureComponent;
  let fixture: ComponentFixture<StPricingFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPricingFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPricingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
