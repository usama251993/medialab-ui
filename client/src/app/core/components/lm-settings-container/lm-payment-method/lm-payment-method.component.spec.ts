import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmPaymentMethodComponent } from './lm-payment-method.component';

describe('LmPaymentMethodComponent', () => {
  let component: LmPaymentMethodComponent;
  let fixture: ComponentFixture<LmPaymentMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmPaymentMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmPaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
