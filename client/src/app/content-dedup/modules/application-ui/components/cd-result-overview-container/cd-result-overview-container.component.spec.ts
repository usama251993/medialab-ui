import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdResultOverviewContainerComponent } from './cd-result-overview-container.component';

describe('CdResultOverviewContainerComponent', () => {
  let component: CdResultOverviewContainerComponent;
  let fixture: ComponentFixture<CdResultOverviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdResultOverviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultOverviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
