import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaBucketComponent } from './ia-bucket.component';

describe('IaBucketComponent', () => {
  let component: IaBucketComponent;
  let fixture: ComponentFixture<IaBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
