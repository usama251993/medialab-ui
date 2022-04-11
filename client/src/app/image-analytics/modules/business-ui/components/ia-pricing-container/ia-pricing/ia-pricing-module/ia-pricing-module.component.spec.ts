import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaPricingModuleComponent } from './ia-pricing-module.component';

describe('IaPricingModuleComponent', () => {
  let component: IaPricingModuleComponent;
  let fixture: ComponentFixture<IaPricingModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaPricingModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaPricingModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
