import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPricingModuleComponent } from './st-pricing-module.component';

describe('StPricingModuleComponent', () => {
  let component: StPricingModuleComponent;
  let fixture: ComponentFixture<StPricingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPricingModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPricingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
