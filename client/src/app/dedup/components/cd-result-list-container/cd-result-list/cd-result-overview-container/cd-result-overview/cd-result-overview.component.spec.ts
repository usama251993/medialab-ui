import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdResultOverviewComponent } from './cd-result-overview.component';

describe('CdResultOverviewComponent', () => {
  let component: CdResultOverviewComponent;
  let fixture: ComponentFixture<CdResultOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdResultOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
