import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CdAppShellComponent } from './cd-app-shell.component'

describe('CdAppShellComponent', () => {
  let component: CdAppShellComponent
  let fixture: ComponentFixture<CdAppShellComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdAppShellComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CdAppShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
