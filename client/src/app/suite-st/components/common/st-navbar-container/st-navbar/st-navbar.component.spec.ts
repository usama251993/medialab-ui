import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StNavbarComponent } from './st-navbar.component';

describe('StNavbarComponent', () => {
  let component: StNavbarComponent;
  let fixture: ComponentFixture<StNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
