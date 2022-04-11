import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StAppShellComponent } from './st-app-shell.component';

describe('StAppShellComponent', () => {
  let component: StAppShellComponent;
  let fixture: ComponentFixture<StAppShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StAppShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StAppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
