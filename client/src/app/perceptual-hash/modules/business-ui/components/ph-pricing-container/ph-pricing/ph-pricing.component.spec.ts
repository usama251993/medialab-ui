import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPricingComponent } from './ph-pricing.component';

describe('PhPricingComponent', () => {
  let component: PhPricingComponent;
  let fixture: ComponentFixture<PhPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
