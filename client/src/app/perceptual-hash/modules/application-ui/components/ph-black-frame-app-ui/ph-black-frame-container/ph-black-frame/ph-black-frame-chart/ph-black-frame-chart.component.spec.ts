import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhBlackFrameChartComponent } from './ph-black-frame-chart.component';

describe('PhBlackFrameChartComponent', () => {
  let component: PhBlackFrameChartComponent;
  let fixture: ComponentFixture<PhBlackFrameChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhBlackFrameChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhBlackFrameChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
