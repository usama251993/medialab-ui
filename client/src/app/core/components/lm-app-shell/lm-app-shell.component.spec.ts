import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LmAppShellComponent } from './lm-app-shell.component'

describe('LmAppShellComponent', () => {
  let component: LmAppShellComponent
  let fixture: ComponentFixture<LmAppShellComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LmAppShellComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LmAppShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
