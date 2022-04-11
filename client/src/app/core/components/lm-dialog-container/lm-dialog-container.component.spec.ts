import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmDialogContainerComponent } from './lm-dialog-container.component';

describe('LmDialogContainerComponent', () => {
  let component: LmDialogContainerComponent;
  let fixture: ComponentFixture<LmDialogContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmDialogContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
