import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFeatureLeftBannerComponent } from './st-feature-left-banner.component';

describe('StFeatureLeftBannerComponent', () => {
  let component: StFeatureLeftBannerComponent;
  let fixture: ComponentFixture<StFeatureLeftBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StFeatureLeftBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StFeatureLeftBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
