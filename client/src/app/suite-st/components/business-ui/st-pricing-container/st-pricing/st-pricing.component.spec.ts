import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPricingComponent } from './st-pricing.component';

describe('StPricingComponent', () => {
  let component: StPricingComponent;
  let fixture: ComponentFixture<StPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
