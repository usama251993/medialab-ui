import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPhashComparisonSummaryComponent } from './ph-phash-comparison-summary.component';

describe('PhPhashComparisonSummaryComponent', () => {
  let component: PhPhashComparisonSummaryComponent;
  let fixture: ComponentFixture<PhPhashComparisonSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPhashComparisonSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPhashComparisonSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
