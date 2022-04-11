import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StBoxContainerComponent } from './st-box-container.component';

describe('StBoxContainerComponent', () => {
  let component: StBoxContainerComponent;
  let fixture: ComponentFixture<StBoxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StBoxContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StBoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
