import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFeatureContainerComponent } from './st-feature-container.component';

describe('StFeatureContainerComponent', () => {
  let component: StFeatureContainerComponent;
  let fixture: ComponentFixture<StFeatureContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StFeatureContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StFeatureContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
