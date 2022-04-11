import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhBlackFrameComponent } from './ph-black-frame.component';

describe('PhBlackFrameComponent', () => {
  let component: PhBlackFrameComponent;
  let fixture: ComponentFixture<PhBlackFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhBlackFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhBlackFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
