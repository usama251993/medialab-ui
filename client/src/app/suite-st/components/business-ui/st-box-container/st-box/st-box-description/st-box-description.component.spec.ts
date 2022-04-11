import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StBoxDescriptionComponent } from './st-box-description.component';

describe('StBoxDescriptionComponent', () => {
  let component: StBoxDescriptionComponent;
  let fixture: ComponentFixture<StBoxDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StBoxDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StBoxDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
