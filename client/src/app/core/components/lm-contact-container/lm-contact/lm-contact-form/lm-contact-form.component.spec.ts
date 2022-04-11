import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmContactFormComponent } from './lm-contact-form.component';

describe('LmContactFormComponent', () => {
  let component: LmContactFormComponent;
  let fixture: ComponentFixture<LmContactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmContactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
