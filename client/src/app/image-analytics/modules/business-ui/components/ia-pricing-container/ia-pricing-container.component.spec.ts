import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaPricingContainerComponent } from './ia-pricing-container.component';

describe('IaPricingContainerComponent', () => {
  let component: IaPricingContainerComponent;
  let fixture: ComponentFixture<IaPricingContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaPricingContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaPricingContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
