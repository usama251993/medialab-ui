import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IaAppShellComponent } from './ia-app-shell.component'

describe('IaAppShellComponent', () => {
  let component: IaAppShellComponent
  let fixture: ComponentFixture<IaAppShellComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IaAppShellComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IaAppShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
