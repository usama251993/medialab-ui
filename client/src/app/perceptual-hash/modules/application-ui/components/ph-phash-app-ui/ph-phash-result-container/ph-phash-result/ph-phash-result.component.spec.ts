import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPhashResultComponent } from './ph-phash-result.component';

describe('PhPhashResultComponent', () => {
  let component: PhPhashResultComponent;
  let fixture: ComponentFixture<PhPhashResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPhashResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPhashResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
