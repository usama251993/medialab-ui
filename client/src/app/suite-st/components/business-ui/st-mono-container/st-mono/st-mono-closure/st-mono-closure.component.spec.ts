import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMonoClosureComponent } from './st-mono-closure.component';

describe('StMonoClosureComponent', () => {
  let component: StMonoClosureComponent;
  let fixture: ComponentFixture<StMonoClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StMonoClosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StMonoClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
