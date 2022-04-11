import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmInvoicesComponent } from './lm-invoices.component';

describe('LmInvoicesComponent', () => {
  let component: LmInvoicesComponent;
  let fixture: ComponentFixture<LmInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmInvoicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
