import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StPricingClosureComponent } from './st-pricing-closure.component';

describe('StPricingClosureComponent', () => {
  let component: StPricingClosureComponent;
  let fixture: ComponentFixture<StPricingClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StPricingClosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StPricingClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
