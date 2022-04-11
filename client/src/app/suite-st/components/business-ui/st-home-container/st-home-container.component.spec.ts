import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeContainerComponent } from './st-home-container.component';

describe('StHomeContainerComponent', () => {
  let component: StHomeContainerComponent;
  let fixture: ComponentFixture<StHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
