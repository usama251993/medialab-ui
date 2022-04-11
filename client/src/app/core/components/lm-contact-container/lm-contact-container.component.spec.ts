import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmContactContainerComponent } from './lm-contact-container.component';

describe('LmContactContainerComponent', () => {
  let component: LmContactContainerComponent;
  let fixture: ComponentFixture<LmContactContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmContactContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmContactContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
