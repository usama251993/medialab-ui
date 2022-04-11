import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmErrorComponent } from './lm-error.component';

describe('LmErrorComponent', () => {
  let component: LmErrorComponent;
  let fixture: ComponentFixture<LmErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
