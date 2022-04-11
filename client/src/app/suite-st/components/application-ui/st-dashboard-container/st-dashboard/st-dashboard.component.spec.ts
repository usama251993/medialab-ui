import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StDashboardComponent } from './st-dashboard.component';

describe('StDashboardComponent', () => {
  let component: StDashboardComponent;
  let fixture: ComponentFixture<StDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
