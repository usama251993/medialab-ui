import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPricingComponent } from './cd-pricing.component';

describe('CdPricingComponent', () => {
  let component: CdPricingComponent;
  let fixture: ComponentFixture<CdPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
