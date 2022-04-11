import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhColorbarChartComponent } from './ph-colorbar-chart.component';

describe('PhColorbarChartComponent', () => {
  let component: PhColorbarChartComponent;
  let fixture: ComponentFixture<PhColorbarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhColorbarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhColorbarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
