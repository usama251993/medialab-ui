import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdNavbarComponent } from './cd-navbar.component';

describe('CdNavbarComponent', () => {
  let component: CdNavbarComponent;
  let fixture: ComponentFixture<CdNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
