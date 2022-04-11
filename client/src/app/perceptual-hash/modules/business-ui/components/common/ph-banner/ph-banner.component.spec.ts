import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhBannerComponent } from './ph-banner.component';

describe('PhBannerComponent', () => {
  let component: PhBannerComponent;
  let fixture: ComponentFixture<PhBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
