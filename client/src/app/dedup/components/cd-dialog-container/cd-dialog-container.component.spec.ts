import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDialogContainerComponent } from './cd-dialog-container.component';

describe('CdDialogContainerComponent', () => {
  let component: CdDialogContainerComponent;
  let fixture: ComponentFixture<CdDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
