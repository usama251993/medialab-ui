import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMonoBannerComponent } from './st-mono-banner.component';

describe('StMonoBannerComponent', () => {
  let component: StMonoBannerComponent;
  let fixture: ComponentFixture<StMonoBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StMonoBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StMonoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
