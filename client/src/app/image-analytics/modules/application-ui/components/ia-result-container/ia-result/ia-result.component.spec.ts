import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaResultComponent } from './ia-result.component';

describe('IaResultComponent', () => {
  let component: IaResultComponent;
  let fixture: ComponentFixture<IaResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
