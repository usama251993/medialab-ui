import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CdClosureComponent } from './cd-closure.component'

describe('CdClosureComponent', () => {
  let component: CdClosureComponent
  let fixture: ComponentFixture<CdClosureComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CdClosureComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CdClosureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
