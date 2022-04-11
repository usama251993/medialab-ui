import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhColorbarContainerComponent } from './ph-colorbar-container.component';

describe('PhColorbarContainerComponent', () => {
  let component: PhColorbarContainerComponent;
  let fixture: ComponentFixture<PhColorbarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhColorbarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhColorbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
