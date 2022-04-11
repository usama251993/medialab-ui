import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CdResultShellContainerComponent } from './cd-result-shell-container.component'

describe('CdResultShellContainerComponent', () => {
  let component: CdResultShellContainerComponent
  let fixture: ComponentFixture<CdResultShellContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdResultShellContainerComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultShellContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
