import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaSummaryGraphComponent } from './ia-summary-graph.component';

describe('IaSummaryGraphComponent', () => {
  let component: IaSummaryGraphComponent;
  let fixture: ComponentFixture<IaSummaryGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaSummaryGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaSummaryGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
