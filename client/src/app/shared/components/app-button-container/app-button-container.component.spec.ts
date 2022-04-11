import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppButtonContainerComponent } from './app-button-container.component';

describe('AppButtonContainerComponent', () => {
  let component: AppButtonContainerComponent;
  let fixture: ComponentFixture<AppButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppButtonContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
