import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSummaryGraphComponent } from './cd-summary-graph.component';

describe('CdSummaryGraphComponent', () => {
  let component: CdSummaryGraphComponent;
  let fixture: ComponentFixture<CdSummaryGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdSummaryGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdSummaryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
