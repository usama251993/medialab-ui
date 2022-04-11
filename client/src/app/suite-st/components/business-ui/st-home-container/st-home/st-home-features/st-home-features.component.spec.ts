import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeFeaturesComponent } from './st-home-features.component';

describe('StHomeFeaturesComponent', () => {
  let component: StHomeFeaturesComponent;
  let fixture: ComponentFixture<StHomeFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
