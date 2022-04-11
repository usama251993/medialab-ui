import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CdBannerComponent } from './cd-banner.component'

describe('CdBannerComponent', () => {
  let component: CdBannerComponent
  let fixture: ComponentFixture<CdBannerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CdBannerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(CdBannerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
