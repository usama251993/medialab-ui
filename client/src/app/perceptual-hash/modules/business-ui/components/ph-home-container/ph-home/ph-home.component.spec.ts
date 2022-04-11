import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhHomeComponent } from './ph-home.component';

describe('PhHomeComponent', () => {
  let component: PhHomeComponent;
  let fixture: ComponentFixture<PhHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
