import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StResultDialogContainerComponent } from './st-result-dialog-container.component';

describe('StResultDialogContainerComponent', () => {
  let component: StResultDialogContainerComponent;
  let fixture: ComponentFixture<StResultDialogContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StResultDialogContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StResultDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
