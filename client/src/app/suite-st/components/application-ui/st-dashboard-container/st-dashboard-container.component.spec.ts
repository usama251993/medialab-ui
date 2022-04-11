import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StDashboardContainerComponent } from './st-dashboard-container.component';

describe('StDashboardContainerComponent', () => {
  let component: StDashboardContainerComponent;
  let fixture: ComponentFixture<StDashboardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StDashboardContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StDashboardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
