import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestComponent } from './lm-test.component';

describe('LmTestComponent', () => {
  let component: LmTestComponent;
  let fixture: ComponentFixture<LmTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
