import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AppRouteErrorComponent } from './app-route-error.component'

describe('AppRouteErrorComponent', () => {
  let component: AppRouteErrorComponent
  let fixture: ComponentFixture<AppRouteErrorComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppRouteErrorComponent]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRouteErrorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
