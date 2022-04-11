import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmTestContainerComponent } from './lm-test-container.component';

describe('LmTestContainerComponent', () => {
  let component: LmTestContainerComponent;
  let fixture: ComponentFixture<LmTestContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmTestContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmTestContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
