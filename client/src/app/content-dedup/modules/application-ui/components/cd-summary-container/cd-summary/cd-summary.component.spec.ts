import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdSummaryComponent } from './cd-summary.component';

describe('CdSummaryComponent', () => {
  let component: CdSummaryComponent;
  let fixture: ComponentFixture<CdSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
