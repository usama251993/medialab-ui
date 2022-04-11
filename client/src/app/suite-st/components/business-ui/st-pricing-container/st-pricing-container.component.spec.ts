import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPricingContainerComponent } from './st-pricing-container.component';

describe('StPricingContainerComponent', () => {
  let component: StPricingContainerComponent;
  let fixture: ComponentFixture<StPricingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPricingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPricingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
