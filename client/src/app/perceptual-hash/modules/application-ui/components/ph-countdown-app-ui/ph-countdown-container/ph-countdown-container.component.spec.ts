import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhColorbarContainerComponent } from './ph-colorbar-container.component';

describe('PhCountDownContainerComponent', () => {
  let component: PhCountDownContainerComponent;
  let fixture: ComponentFixture<PhCountDownContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhCountDownContainerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhCountDownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
