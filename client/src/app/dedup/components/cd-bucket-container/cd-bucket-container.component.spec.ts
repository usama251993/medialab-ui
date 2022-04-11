import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdBucketContainerComponent } from './cd-bucket-container.component';

describe('CdBucketContainerComponent', () => {
  let component: CdBucketContainerComponent;
  let fixture: ComponentFixture<CdBucketContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdBucketContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdBucketContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
