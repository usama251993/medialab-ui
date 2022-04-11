import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaSummaryComponent } from './ia-summary.component';

describe('IaSummaryComponent', () => {
  let component: IaSummaryComponent;
  let fixture: ComponentFixture<IaSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
