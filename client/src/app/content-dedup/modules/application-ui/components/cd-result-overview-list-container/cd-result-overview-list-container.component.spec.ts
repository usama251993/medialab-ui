import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdResultOverviewListContainerComponent } from './cd-result-overview-list-container.component';

describe('CdResultOverviewListContainerComponent', () => {
  let component: CdResultOverviewListContainerComponent;
  let fixture: ComponentFixture<CdResultOverviewListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdResultOverviewListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultOverviewListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
