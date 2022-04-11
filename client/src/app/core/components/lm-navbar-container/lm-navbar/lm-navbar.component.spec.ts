import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmNavbarComponent } from './lm-navbar.component';

describe('LmNavbarComponent', () => {
  let component: LmNavbarComponent;
  let fixture: ComponentFixture<LmNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
