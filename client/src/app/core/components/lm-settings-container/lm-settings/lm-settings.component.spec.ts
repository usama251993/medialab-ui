import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmSettingsComponent } from './lm-settings.component';

describe('LmSettingsComponent', () => {
  let component: LmSettingsComponent;
  let fixture: ComponentFixture<LmSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
