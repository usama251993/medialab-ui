import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmHomeCarouselComponent } from './lm-home-carousel.component';

describe('LmHomeCarouselComponent', () => {
  let component: LmHomeCarouselComponent;
  let fixture: ComponentFixture<LmHomeCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmHomeCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmHomeCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
