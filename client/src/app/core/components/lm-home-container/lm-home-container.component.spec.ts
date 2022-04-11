import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmHomeContainerComponent } from './lm-home-container.component';

describe('LmHomeContainerComponent', () => {
  let component: LmHomeContainerComponent;
  let fixture: ComponentFixture<LmHomeContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmHomeContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
