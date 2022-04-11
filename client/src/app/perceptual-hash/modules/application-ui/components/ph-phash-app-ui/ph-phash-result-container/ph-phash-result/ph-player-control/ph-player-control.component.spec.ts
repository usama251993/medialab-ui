import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPlayerControlComponent } from './ph-player-control.component';

describe('PhPlayerControlComponent', () => {
  let component: PhPlayerControlComponent;
  let fixture: ComponentFixture<PhPlayerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPlayerControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPlayerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
