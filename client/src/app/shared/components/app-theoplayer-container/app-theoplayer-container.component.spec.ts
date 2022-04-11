import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppTheoplayerContainerComponent } from './app-theoplayer-container.component'

describe('AppTheoplayerContainerComponent', () => {
  let component: AppTheoplayerContainerComponent
  let fixture: ComponentFixture<AppTheoplayerContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTheoplayerContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTheoplayerContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
