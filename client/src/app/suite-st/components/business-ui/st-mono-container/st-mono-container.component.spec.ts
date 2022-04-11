import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMonoContainerComponent } from './st-mono-container.component';

describe('StMonoContainerComponent', () => {
  let component: StMonoContainerComponent;
  let fixture: ComponentFixture<StMonoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StMonoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StMonoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
