import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhBlackFrameContainerComponent } from './ph-black-frame-container.component';

describe('PhBlackFrameContainerComponent', () => {
  let component: PhBlackFrameContainerComponent;
  let fixture: ComponentFixture<PhBlackFrameContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhBlackFrameContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhBlackFrameContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
