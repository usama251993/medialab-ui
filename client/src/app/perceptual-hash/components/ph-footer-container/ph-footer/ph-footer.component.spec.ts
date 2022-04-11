import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhFooterComponent } from './ph-footer.component';

describe('PhFooterComponent', () => {
  let component: PhFooterComponent;
  let fixture: ComponentFixture<PhFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
