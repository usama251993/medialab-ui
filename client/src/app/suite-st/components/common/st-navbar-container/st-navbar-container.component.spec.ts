import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StNavbarContainerComponent } from './st-navbar-container.component';

describe('StNavbarContainerComponent', () => {
  let component: StNavbarContainerComponent;
  let fixture: ComponentFixture<StNavbarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StNavbarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StNavbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
