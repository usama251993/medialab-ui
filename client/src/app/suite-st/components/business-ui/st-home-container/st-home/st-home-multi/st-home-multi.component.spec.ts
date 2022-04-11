import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeMultiComponent } from './st-home-multi.component';

describe('StHomeMultiComponent', () => {
  let component: StHomeMultiComponent;
  let fixture: ComponentFixture<StHomeMultiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeMultiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
