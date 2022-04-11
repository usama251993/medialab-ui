import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaPricingComponent } from './ia-pricing.component';

describe('IaPricingComponent', () => {
  let component: IaPricingComponent;
  let fixture: ComponentFixture<IaPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
