import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhNavbarContainerComponent } from './ph-navbar-container.component';

describe('PhNavbarContainerComponent', () => {
  let component: PhNavbarContainerComponent;
  let fixture: ComponentFixture<PhNavbarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhNavbarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhNavbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
