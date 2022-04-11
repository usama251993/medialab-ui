import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmHomeCookiebarComponent } from './lm-home-cookiebar.component';

describe('LmHomeCookiebarComponent', () => {
  let component: LmHomeCookiebarComponent;
  let fixture: ComponentFixture<LmHomeCookiebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmHomeCookiebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmHomeCookiebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
