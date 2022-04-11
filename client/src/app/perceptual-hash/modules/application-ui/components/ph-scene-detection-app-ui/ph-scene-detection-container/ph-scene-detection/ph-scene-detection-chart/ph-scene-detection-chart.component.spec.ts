import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhSceneDetectionChartComponent } from './ph-scene-detection-chart.component'

describe('PhSceneDetectionChartComponent', () => {
  let component: PhSceneDetectionChartComponent
  let fixture: ComponentFixture<PhSceneDetectionChartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhSceneDetectionChartComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhSceneDetectionChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
