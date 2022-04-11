import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmHomeSolutionsComponent } from './lm-home-solutions.component';

describe('LmHomeSolutionsComponent', () => {
  let component: LmHomeSolutionsComponent;
  let fixture: ComponentFixture<LmHomeSolutionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmHomeSolutionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmHomeSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
