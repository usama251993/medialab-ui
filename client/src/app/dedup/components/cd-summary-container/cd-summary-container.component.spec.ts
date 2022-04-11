import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSummaryContainerComponent } from './cd-summary-container.component';

describe('CdSummaryContainerComponent', () => {
  let component: CdSummaryContainerComponent;
  let fixture: ComponentFixture<CdSummaryContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdSummaryContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
