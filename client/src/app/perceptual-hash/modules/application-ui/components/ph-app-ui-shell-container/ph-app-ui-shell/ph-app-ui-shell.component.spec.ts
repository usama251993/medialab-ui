import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhAppComponent } from './ph-app.component'

describe('PhAppComponent', () => {
  let component: PhAppComponent
  let fixture: ComponentFixture<PhAppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhAppComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhAppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
