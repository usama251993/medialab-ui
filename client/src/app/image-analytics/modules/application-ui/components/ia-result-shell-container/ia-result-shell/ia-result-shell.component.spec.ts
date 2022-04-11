import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IaResultShellComponent } from './ia-result-shell.component'

describe('IaResultListComponent', () => {
  let component: IaResultShellComponent
  let fixture: ComponentFixture<IaResultShellComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IaResultShellComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultShellComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
