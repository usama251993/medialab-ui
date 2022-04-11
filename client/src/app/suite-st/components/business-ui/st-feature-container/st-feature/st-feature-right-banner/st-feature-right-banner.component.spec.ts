import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFeatureRightBannerComponent } from './st-feature-right-banner.component';

describe('StFeatureRightBannerComponent', () => {
  let component: StFeatureRightBannerComponent;
  let fixture: ComponentFixture<StFeatureRightBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StFeatureRightBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StFeatureRightBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
