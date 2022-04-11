import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFeatureBannerComponent } from './st-feature-banner.component';

describe('StFeatureBannerComponent', () => {
  let component: StFeatureBannerComponent;
  let fixture: ComponentFixture<StFeatureBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StFeatureBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StFeatureBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
