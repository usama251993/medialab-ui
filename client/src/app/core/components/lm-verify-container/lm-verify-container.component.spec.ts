import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmVerifyContainerComponent } from './lm-verify-container.component';

describe('LmVerifyContainerComponent', () => {
  let component: LmVerifyContainerComponent;
  let fixture: ComponentFixture<LmVerifyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmVerifyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmVerifyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
