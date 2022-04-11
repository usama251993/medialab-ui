import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPricingContainerComponent } from './ph-pricing-container.component';

describe('PhPricingContainerComponent', () => {
  let component: PhPricingContainerComponent;
  let fixture: ComponentFixture<PhPricingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPricingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPricingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
