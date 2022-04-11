import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaResultOverviewContainerComponent } from './ia-result-overview-container.component';

describe('IaResultOverviewContainerComponent', () => {
  let component: IaResultOverviewContainerComponent;
  let fixture: ComponentFixture<IaResultOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaResultOverviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
