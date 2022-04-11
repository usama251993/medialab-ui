import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaResultOverviewListComponent } from './ia-result-overview-list.component';

describe('IaResultOverviewListComponent', () => {
  let component: IaResultOverviewListComponent;
  let fixture: ComponentFixture<IaResultOverviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaResultOverviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
