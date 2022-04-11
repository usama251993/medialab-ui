import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaFooterContainerComponent } from './ia-footer-container.component';

describe('IaFooterContainerComponent', () => {
  let component: IaFooterContainerComponent;
  let fixture: ComponentFixture<IaFooterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaFooterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
