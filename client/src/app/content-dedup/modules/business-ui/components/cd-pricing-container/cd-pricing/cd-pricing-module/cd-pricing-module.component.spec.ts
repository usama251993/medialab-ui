import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPricingModuleComponent } from './cd-pricing-module.component';

describe('CdPricingModuleComponent', () => {
  let component: CdPricingModuleComponent;
  let fixture: ComponentFixture<CdPricingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdPricingModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPricingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
