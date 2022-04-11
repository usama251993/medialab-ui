import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmKbprofileComponent } from './lm-kbprofile.component';

describe('LmKbprofileComponent', () => {
  let component: LmKbprofileComponent;
  let fixture: ComponentFixture<LmKbprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmKbprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmKbprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
