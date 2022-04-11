import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaResultOverviewComponent } from './ia-result-overview.component';

describe('IaResultOverviewComponent', () => {
  let component: IaResultOverviewComponent;
  let fixture: ComponentFixture<IaResultOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaResultOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
