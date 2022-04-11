import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmSettingsContainerComponent } from './lm-settings-container.component';

describe('LmSettingsContainerComponent', () => {
  let component: LmSettingsContainerComponent;
  let fixture: ComponentFixture<LmSettingsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmSettingsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmSettingsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
