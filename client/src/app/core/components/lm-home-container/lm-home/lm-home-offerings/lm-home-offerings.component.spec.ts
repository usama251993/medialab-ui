import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmHomeOfferingsComponent } from './lm-home-offerings.component';

describe('LmHomeOfferingsComponent', () => {
  let component: LmHomeOfferingsComponent;
  let fixture: ComponentFixture<LmHomeOfferingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmHomeOfferingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmHomeOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
