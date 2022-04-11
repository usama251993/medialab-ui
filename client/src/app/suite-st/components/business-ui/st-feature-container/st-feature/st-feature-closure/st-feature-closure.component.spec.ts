import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFeatureClosureComponent } from './st-feature-closure.component';

describe('StFeatureClosureComponent', () => {
  let component: StFeatureClosureComponent;
  let fixture: ComponentFixture<StFeatureClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StFeatureClosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StFeatureClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
