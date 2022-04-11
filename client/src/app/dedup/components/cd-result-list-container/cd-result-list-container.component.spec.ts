import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CdResultListContainerComponent } from './cd-result-list-container.component'

describe('CdResultListContainerComponent', () => {
  let component: CdResultListContainerComponent
  let fixture: ComponentFixture<CdResultListContainerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdResultListContainerComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultListContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
