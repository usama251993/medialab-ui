import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmPricingComponent } from './lm-pricing.component';

describe('LmPricingComponent', () => {
  let component: LmPricingComponent;
  let fixture: ComponentFixture<LmPricingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmPricingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
