import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhPhashBucketContainerComponent } from './ph-phash-bucket-container.component'

describe('PhPhashBucketContainerComponent', () => {
  let component: PhPhashBucketContainerComponent
  let fixture: ComponentFixture<PhPhashBucketContainerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhPhashBucketContainerComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPhashBucketContainerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
