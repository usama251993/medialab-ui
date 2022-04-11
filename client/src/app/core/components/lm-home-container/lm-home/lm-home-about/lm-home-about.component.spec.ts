import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmHomeAboutComponent } from './lm-home-about.component';

describe('LmHomeAboutComponent', () => {
  let component: LmHomeAboutComponent;
  let fixture: ComponentFixture<LmHomeAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmHomeAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmHomeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
