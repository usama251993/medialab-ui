import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmHomeCustomersComponent } from './lm-home-customers.component';

describe('LmHomeCustomersComponent', () => {
  let component: LmHomeCustomersComponent;
  let fixture: ComponentFixture<LmHomeCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmHomeCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmHomeCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
