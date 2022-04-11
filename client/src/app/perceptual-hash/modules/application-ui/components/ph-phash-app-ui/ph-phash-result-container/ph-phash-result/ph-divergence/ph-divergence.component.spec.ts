import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhDivergenceComponent } from './ph-divergence.component';

describe('PhDivergenceComponent', () => {
  let component: PhDivergenceComponent;
  let fixture: ComponentFixture<PhDivergenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhDivergenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhDivergenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
