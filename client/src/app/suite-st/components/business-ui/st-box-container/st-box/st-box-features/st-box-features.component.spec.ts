import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StBoxFeaturesComponent } from './st-box-features.component';

describe('StBoxFeaturesComponent', () => {
  let component: StBoxFeaturesComponent;
  let fixture: ComponentFixture<StBoxFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StBoxFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StBoxFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
