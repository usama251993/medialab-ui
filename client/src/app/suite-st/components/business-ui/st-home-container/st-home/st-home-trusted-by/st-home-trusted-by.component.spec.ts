import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeTrustedByComponent } from './st-home-trusted-by.component';

describe('StHomeTrustedByComponent', () => {
  let component: StHomeTrustedByComponent;
  let fixture: ComponentFixture<StHomeTrustedByComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeTrustedByComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeTrustedByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
