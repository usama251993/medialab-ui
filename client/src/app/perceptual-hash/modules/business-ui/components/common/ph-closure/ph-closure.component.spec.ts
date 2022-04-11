import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhClosureComponent } from './ph-closure.component';

describe('PhClosureComponent', () => {
  let component: PhClosureComponent;
  let fixture: ComponentFixture<PhClosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhClosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhClosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
