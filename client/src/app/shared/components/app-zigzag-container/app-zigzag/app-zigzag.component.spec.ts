import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppZigzagComponent } from './app-zigzag.component';

describe('AppZigzagComponent', () => {
  let component: AppZigzagComponent;
  let fixture: ComponentFixture<AppZigzagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppZigzagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppZigzagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
