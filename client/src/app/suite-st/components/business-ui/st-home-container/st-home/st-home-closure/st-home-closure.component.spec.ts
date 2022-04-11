import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeClosureComponent } from './st-home-closure.component';

describe('StHomeClosureComponent', () => {
  let component: StHomeClosureComponent;
  let fixture: ComponentFixture<StHomeClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeClosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
