import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPhashComponent } from './ph-phash.component';

describe('PhPhashComponent', () => {
  let component: PhPhashComponent;
  let fixture: ComponentFixture<PhPhashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPhashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPhashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
