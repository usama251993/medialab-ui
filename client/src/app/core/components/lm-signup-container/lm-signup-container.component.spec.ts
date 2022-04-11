import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmSignupContainerComponent } from './lm-signup-container.component';

describe('LmSignupContainerComponent', () => {
  let component: LmSignupContainerComponent;
  let fixture: ComponentFixture<LmSignupContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmSignupContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmSignupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
