import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPricingModuleComponent } from './ph-pricing-module.component';

describe('PhPricingModuleComponent', () => {
  let component: PhPricingModuleComponent;
  let fixture: ComponentFixture<PhPricingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPricingModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPricingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
