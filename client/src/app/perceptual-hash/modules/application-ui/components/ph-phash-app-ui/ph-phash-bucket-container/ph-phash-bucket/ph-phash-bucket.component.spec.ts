import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PhPhashBucketComponent } from './ph-phash-bucket.component'

describe('PhPhashBucketComponent', () => {
  let component: PhPhashBucketComponent
  let fixture: ComponentFixture<PhPhashBucketComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhPhashBucketComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPhashBucketComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
