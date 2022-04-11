import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDialogComponent } from './cd-dialog.component';

describe('CdDialogComponent', () => {
  let component: CdDialogComponent;
  let fixture: ComponentFixture<CdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
