import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhNavbarComponent } from './ph-navbar.component';

describe('PhNavbarComponent', () => {
  let component: PhNavbarComponent;
  let fixture: ComponentFixture<PhNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
