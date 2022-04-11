import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhMatrixComponent } from './ph-matrix.component';

describe('PhMatrixComponent', () => {
  let component: PhMatrixComponent;
  let fixture: ComponentFixture<PhMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
