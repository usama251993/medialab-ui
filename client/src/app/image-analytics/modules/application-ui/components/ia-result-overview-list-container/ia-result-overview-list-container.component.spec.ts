import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaResultOverviewListContainerComponent } from './ia-result-overview-list-container.component';

describe('IaResultOverviewListContainerComponent', () => {
  let component: IaResultOverviewListContainerComponent;
  let fixture: ComponentFixture<IaResultOverviewListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaResultOverviewListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultOverviewListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
