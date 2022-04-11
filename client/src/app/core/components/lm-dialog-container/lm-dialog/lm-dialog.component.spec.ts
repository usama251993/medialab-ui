import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmDialogComponent } from './lm-dialog.component';

describe('LmDialogComponent', () => {
  let component: LmDialogComponent;
  let fixture: ComponentFixture<LmDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
