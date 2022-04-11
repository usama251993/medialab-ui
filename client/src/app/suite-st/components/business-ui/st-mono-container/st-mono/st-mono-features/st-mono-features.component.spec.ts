import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMonoFeaturesComponent } from './st-mono-features.component';

describe('StMonoFeaturesComponent', () => {
  let component: StMonoFeaturesComponent;
  let fixture: ComponentFixture<StMonoFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StMonoFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StMonoFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
