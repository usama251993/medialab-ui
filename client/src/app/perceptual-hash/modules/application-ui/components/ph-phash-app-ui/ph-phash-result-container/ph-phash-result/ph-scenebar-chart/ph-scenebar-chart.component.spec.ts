import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhScenebarChartComponent } from './ph-scenebar-chart.component';

describe('PhScenebarChartComponent', () => {
  let component: PhScenebarChartComponent;
  let fixture: ComponentFixture<PhScenebarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhScenebarChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhScenebarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
