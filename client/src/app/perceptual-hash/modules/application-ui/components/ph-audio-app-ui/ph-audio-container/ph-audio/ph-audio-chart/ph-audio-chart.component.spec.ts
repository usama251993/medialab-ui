import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhAudioChartComponent } from './ph-audio-chart.component';

describe('PhAudioChartComponent', () => {
  let component: PhAudioChartComponent;
  let fixture: ComponentFixture<PhAudioChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhAudioChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhAudioChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
