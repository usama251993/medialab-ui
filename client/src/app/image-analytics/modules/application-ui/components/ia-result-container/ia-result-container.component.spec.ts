import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaResultContainerComponent } from './ia-result-container.component';

describe('IaResultContainerComponent', () => {
  let component: IaResultContainerComponent;
  let fixture: ComponentFixture<IaResultContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaResultContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
