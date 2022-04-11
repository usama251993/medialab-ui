import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmCookiebarComponent } from './lm-cookiebar.component';

describe('LmCookiebarComponent', () => {
  let component: LmCookiebarComponent;
  let fixture: ComponentFixture<LmCookiebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmCookiebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmCookiebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
