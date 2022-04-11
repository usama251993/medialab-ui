import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaDialogContainerComponent } from './ia-dialog-container.component';

describe('IaDialogContainerComponent', () => {
  let component: IaDialogContainerComponent;
  let fixture: ComponentFixture<IaDialogContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaDialogContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaDialogContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
