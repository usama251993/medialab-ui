import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaDialogComponent } from './ia-dialog.component';

describe('IaDialogComponent', () => {
  let component: IaDialogComponent;
  let fixture: ComponentFixture<IaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
