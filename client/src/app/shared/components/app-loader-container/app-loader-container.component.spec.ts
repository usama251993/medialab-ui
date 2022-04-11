import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoaderContainerComponent } from './app-loader-container.component';

describe('AppLoaderContainerComponent', () => {
  let component: AppLoaderContainerComponent;
  let fixture: ComponentFixture<AppLoaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLoaderContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLoaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
