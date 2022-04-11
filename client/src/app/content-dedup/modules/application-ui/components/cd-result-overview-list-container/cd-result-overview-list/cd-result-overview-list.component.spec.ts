import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdResultOverviewListComponent } from './cd-result-overview-list.component';

describe('CdResultOverviewListComponent', () => {
  let component: CdResultOverviewListComponent;
  let fixture: ComponentFixture<CdResultOverviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdResultOverviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultOverviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
