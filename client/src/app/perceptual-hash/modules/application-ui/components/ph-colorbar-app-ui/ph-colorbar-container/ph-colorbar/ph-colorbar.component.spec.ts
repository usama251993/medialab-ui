import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhColorbarComponent } from './ph-colorbar.component';

describe('PhColorbarComponent', () => {
  let component: PhColorbarComponent;
  let fixture: ComponentFixture<PhColorbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhColorbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhColorbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
