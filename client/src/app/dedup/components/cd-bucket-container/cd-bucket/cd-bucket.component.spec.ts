import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdBucketComponent } from './cd-bucket.component';

describe('CdBucketComponent', () => {
  let component: CdBucketComponent;
  let fixture: ComponentFixture<CdBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
