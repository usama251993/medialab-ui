import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhAppShellComponent } from './ph-app-shell.component';

describe('PhAppShellComponent', () => {
  let component: PhAppShellComponent;
  let fixture: ComponentFixture<PhAppShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhAppShellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhAppShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
