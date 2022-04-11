import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhAppUIShellContainerComponent } from './ph-app-ui-shell-container.component'

describe('PhAppUIShellContainerComponent', () => {
  let component: PhAppUIShellContainerComponent
  let fixture: ComponentFixture<PhAppUIShellContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhAppUIShellContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhAppUIShellContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
