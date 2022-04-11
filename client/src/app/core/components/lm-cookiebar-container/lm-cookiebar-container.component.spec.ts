import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmCookiebarContainerComponent } from './lm-cookiebar-container.component';

describe('LmCookiebarContainerComponent', () => {
  let component: LmCookiebarContainerComponent;
  let fixture: ComponentFixture<LmCookiebarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmCookiebarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmCookiebarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
