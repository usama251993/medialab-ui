import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmLoginContainerComponent } from './lm-login-container.component';

describe('LmLoginContainerComponent', () => {
  let component: LmLoginContainerComponent;
  let fixture: ComponentFixture<LmLoginContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmLoginContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmLoginContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
