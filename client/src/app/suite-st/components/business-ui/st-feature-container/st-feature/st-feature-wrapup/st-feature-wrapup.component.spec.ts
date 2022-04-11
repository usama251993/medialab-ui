import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFeatureWrapupComponent } from './st-feature-wrapup.component';

describe('StFeatureWrapupComponent', () => {
  let component: StFeatureWrapupComponent;
  let fixture: ComponentFixture<StFeatureWrapupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StFeatureWrapupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StFeatureWrapupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
