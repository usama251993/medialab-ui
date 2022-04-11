import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmFooterContainerComponent } from './lm-footer-container.component';

describe('LmFooterContainerComponent', () => {
  let component: LmFooterContainerComponent;
  let fixture: ComponentFixture<LmFooterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmFooterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
