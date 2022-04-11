import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhCircularPackedChartComponent } from './ph-circular-packed-chart.component';

describe('PhCircularPackedChartComponent', () => {
  let component: PhCircularPackedChartComponent;
  let fixture: ComponentFixture<PhCircularPackedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhCircularPackedChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhCircularPackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
