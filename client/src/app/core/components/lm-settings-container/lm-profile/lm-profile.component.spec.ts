import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmProfileComponent } from './lm-profile.component';

describe('LmProfileComponent', () => {
  let component: LmProfileComponent;
  let fixture: ComponentFixture<LmProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
