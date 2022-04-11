import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhFooterContainerComponent } from './ph-footer-container.component';

describe('PhFooterContainerComponent', () => {
  let component: PhFooterContainerComponent;
  let fixture: ComponentFixture<PhFooterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhFooterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
