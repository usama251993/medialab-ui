import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StBoxComponent } from './st-box.component';

describe('StBoxComponent', () => {
  let component: StBoxComponent;
  let fixture: ComponentFixture<StBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
