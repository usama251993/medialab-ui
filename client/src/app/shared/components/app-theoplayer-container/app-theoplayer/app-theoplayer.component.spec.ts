import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AppTheoplayerComponent } from './app-theoplayer.component'

describe('AppTheoplayerComponent', () => {
  let component: AppTheoplayerComponent
  let fixture: ComponentFixture<AppTheoplayerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppTheoplayerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTheoplayerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
