import { ComponentFixture, TestBed } from '@angular/core/testing'

import { StZigzagComponent } from './st-zigzag.component'

describe('StZigzagComponent', () => {
  let component: StZigzagComponent
  let fixture: ComponentFixture<StZigzagComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StZigzagComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(StZigzagComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
