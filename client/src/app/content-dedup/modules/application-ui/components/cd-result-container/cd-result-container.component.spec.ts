import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdResultContainerComponent } from './cd-result-container.component';

describe('CdResultContainerComponent', () => {
  let component: CdResultContainerComponent;
  let fixture: ComponentFixture<CdResultContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdResultContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
