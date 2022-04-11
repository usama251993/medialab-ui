import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFeatureComponent } from './st-feature.component';

describe('StFeatureComponent', () => {
  let component: StFeatureComponent;
  let fixture: ComponentFixture<StFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
