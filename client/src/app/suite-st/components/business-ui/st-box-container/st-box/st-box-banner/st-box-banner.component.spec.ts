import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StBoxBannerComponent } from './st-box-banner.component';

describe('StBoxBannerComponent', () => {
  let component: StBoxBannerComponent;
  let fixture: ComponentFixture<StBoxBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StBoxBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StBoxBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
