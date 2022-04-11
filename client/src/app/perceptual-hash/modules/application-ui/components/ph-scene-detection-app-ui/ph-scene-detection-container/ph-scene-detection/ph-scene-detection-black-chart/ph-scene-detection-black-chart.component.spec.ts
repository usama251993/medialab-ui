import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhSceneDetectionBlackChartComponent } from './ph-scene-detection-black-chart.component'

describe('PhSceneDetectionBlackChartComponent', () => {
  let component: PhSceneDetectionBlackChartComponent
  let fixture: ComponentFixture<PhSceneDetectionBlackChartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhSceneDetectionBlackChartComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhSceneDetectionBlackChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
