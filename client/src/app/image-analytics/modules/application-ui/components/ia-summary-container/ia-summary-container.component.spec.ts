import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaSummaryContainerComponent } from './ia-summary-container.component';

describe('IaSummaryContainerComponent', () => {
  let component: IaSummaryContainerComponent;
  let fixture: ComponentFixture<IaSummaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaSummaryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
