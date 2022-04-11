import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhSceneDetectionContainerComponent } from './ph-scene-detection-container.component'

describe('PhSceneDetectionContainerComponent', () => {
  let component: PhSceneDetectionContainerComponent
  let fixture: ComponentFixture<PhSceneDetectionContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhSceneDetectionContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhSceneDetectionContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
