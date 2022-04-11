import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmContactComponent } from './lm-contact.component';

describe('LmContactComponent', () => {
  let component: LmContactComponent;
  let fixture: ComponentFixture<LmContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
