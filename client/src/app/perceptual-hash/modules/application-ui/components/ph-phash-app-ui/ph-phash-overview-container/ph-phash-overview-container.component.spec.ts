import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhPhashOverviewContainerComponent } from './ph-phash-overview-container.component'

describe('PhPhashOverviewContainerComponent', () => {
  let component: PhPhashOverviewContainerComponent
  let fixture: ComponentFixture<PhPhashOverviewContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhPhashOverviewContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPhashOverviewContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
