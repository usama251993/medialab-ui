import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTableauComponent } from './app-tableau.component';

describe('AppTableauComponent', () => {
  let component: AppTableauComponent;
  let fixture: ComponentFixture<AppTableauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTableauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
