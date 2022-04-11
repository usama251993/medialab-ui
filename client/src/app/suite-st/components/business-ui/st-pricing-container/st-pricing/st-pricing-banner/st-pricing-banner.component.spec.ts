import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPricingBannerComponent } from './st-pricing-banner.component';

describe('StPricingBannerComponent', () => {
  let component: StPricingBannerComponent;
  let fixture: ComponentFixture<StPricingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPricingBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPricingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
