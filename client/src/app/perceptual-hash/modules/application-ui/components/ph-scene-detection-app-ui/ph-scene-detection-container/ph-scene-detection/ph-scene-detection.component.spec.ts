import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhSceneDetectionComponent } from './ph-scene-detection.component'

describe('PhSceneDetectionComponent', () => {
  let component: PhSceneDetectionComponent
  let fixture: ComponentFixture<PhSceneDetectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhSceneDetectionComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhSceneDetectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
