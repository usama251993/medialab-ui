import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StMonoComponent } from './st-mono.component';

describe('StMonoComponent', () => {
  let component: StMonoComponent;
  let fixture: ComponentFixture<StMonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StMonoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StMonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
