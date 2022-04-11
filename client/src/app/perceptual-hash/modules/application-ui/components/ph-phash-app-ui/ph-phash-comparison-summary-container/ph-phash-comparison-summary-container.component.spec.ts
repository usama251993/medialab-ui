import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPhashComparisonSummaryContainerComponent } from './ph-phash-comparison-summary-container.component';

describe('PhPhashComparisonSummaryContainerComponent', () => {
  let component: PhPhashComparisonSummaryContainerComponent;
  let fixture: ComponentFixture<PhPhashComparisonSummaryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPhashComparisonSummaryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPhashComparisonSummaryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
