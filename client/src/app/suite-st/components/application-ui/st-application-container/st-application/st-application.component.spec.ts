import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StApplicationComponent } from './st-application.component';

describe('StApplicationComponent', () => {
  let component: StApplicationComponent;
  let fixture: ComponentFixture<StApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
