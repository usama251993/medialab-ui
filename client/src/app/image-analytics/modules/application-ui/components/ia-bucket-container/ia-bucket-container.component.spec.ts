import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaBucketContainerComponent } from './ia-bucket-container.component';

describe('IaBucketContainerComponent', () => {
  let component: IaBucketContainerComponent;
  let fixture: ComponentFixture<IaBucketContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaBucketContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaBucketContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
