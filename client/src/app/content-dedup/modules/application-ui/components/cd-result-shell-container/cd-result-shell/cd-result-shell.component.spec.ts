import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { CdResultListComponent } from './cd-result-list.component'

describe('CdResultListComponent', () => {
  let component: CdResultListComponent
  let fixture: ComponentFixture<CdResultListComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CdResultListComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
