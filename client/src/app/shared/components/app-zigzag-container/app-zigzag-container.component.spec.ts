import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppZigzagContainerComponent } from './app-zigzag-container.component';

describe('AppZigzagContainerComponent', () => {
  let component: AppZigzagContainerComponent;
  let fixture: ComponentFixture<AppZigzagContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppZigzagContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppZigzagContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
