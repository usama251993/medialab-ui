import { ComponentFixture, TestBed } from '@angular/core/testing'

import { IaBannerComponent } from './ia-banner.component'

describe('IaBannerComponent', () => {
  let component: IaBannerComponent
  let fixture: ComponentFixture<IaBannerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IaBannerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(IaBannerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
