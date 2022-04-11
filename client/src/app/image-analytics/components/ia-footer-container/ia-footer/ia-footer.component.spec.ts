import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IaFooterComponent } from './ia-footer.component';

describe('IaFooterComponent', () => {
  let component: IaFooterComponent;
  let fixture: ComponentFixture<IaFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IaFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
