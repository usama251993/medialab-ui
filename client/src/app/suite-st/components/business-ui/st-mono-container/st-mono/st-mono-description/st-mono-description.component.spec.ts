import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMonoDescriptionComponent } from './st-mono-description.component';

describe('StMonoDescriptionComponent', () => {
  let component: StMonoDescriptionComponent;
  let fixture: ComponentFixture<StMonoDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StMonoDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StMonoDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
