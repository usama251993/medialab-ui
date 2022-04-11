import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StBoxClosureComponent } from './st-box-closure.component';

describe('StBoxClosureComponent', () => {
  let component: StBoxClosureComponent;
  let fixture: ComponentFixture<StBoxClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StBoxClosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StBoxClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
