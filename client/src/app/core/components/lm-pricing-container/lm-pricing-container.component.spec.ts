import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmPricingContainerComponent } from './lm-pricing-container.component';

describe('LmPricingContainerComponent', () => {
  let component: LmPricingContainerComponent;
  let fixture: ComponentFixture<LmPricingContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmPricingContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmPricingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
