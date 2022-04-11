import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdPricingContainerComponent } from './cd-pricing-container.component';

describe('CdPricingContainerComponent', () => {
  let component: CdPricingContainerComponent;
  let fixture: ComponentFixture<CdPricingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdPricingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdPricingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
