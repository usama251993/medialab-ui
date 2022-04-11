import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IaClosureComponent } from './ia-closure.component'

describe('IaClosureComponent', () => {
  let component: IaClosureComponent
  let fixture: ComponentFixture<IaClosureComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaClosureComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(IaClosureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
