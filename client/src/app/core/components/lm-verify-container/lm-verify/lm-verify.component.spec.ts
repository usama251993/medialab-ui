import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmVerifyComponent } from './lm-verify.component';

describe('LmVerifyComponent', () => {
  let component: LmVerifyComponent;
  let fixture: ComponentFixture<LmVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
