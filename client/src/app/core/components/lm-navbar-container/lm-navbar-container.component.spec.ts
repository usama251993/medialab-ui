import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmNavbarContainerComponent } from './lm-navbar-container.component';

describe('LmNavbarContainerComponent', () => {
  let component: LmNavbarContainerComponent;
  let fixture: ComponentFixture<LmNavbarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmNavbarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmNavbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
