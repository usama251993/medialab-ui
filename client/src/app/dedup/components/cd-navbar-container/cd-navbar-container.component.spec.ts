import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdNavbarContainerComponent } from './cd-navbar-container.component';

describe('CdNavbarContainerComponent', () => {
  let component: CdNavbarContainerComponent;
  let fixture: ComponentFixture<CdNavbarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdNavbarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdNavbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
