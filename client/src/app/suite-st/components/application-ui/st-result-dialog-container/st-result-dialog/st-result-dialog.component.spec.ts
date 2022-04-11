import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StResultDialogComponent } from './st-result-dialog.component';

describe('StResultDialogComponent', () => {
  let component: StResultDialogComponent;
  let fixture: ComponentFixture<StResultDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StResultDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StResultDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
