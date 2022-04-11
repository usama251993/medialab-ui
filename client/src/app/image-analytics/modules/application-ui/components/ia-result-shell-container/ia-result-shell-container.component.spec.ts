import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { IaResultShellContainerComponent } from './ia-result-shell-container.component'

describe('IaResultShellContainerComponent', () => {
  let component: IaResultShellContainerComponent
  let fixture: ComponentFixture<IaResultShellContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IaResultShellContainerComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultShellContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
