import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCarouselContainerComponent } from './app-carousel-container.component';

describe('AppCarouselContainerComponent', () => {
  let component: AppCarouselContainerComponent;
  let fixture: ComponentFixture<AppCarouselContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCarouselContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
