import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableauContainerComponent } from './app-tableau-container.component';

describe('AppTableauContainerComponent', () => {
  let component: AppTableauContainerComponent;
  let fixture: ComponentFixture<AppTableauContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTableauContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTableauContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
