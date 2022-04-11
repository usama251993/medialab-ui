import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeShortInfoComponent } from './st-home-short-info.component';

describe('StHomeShortInfoComponent', () => {
  let component: StHomeShortInfoComponent;
  let fixture: ComponentFixture<StHomeShortInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeShortInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeShortInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
