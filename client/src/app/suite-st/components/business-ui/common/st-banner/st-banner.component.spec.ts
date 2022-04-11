import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StBannerComponent } from './st-banner.component';

describe('StBannerComponent', () => {
  let component: StBannerComponent;
  let fixture: ComponentFixture<StBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
