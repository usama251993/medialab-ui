import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhAudioComponent } from './ph-audio.component';

describe('PhAudioComponent', () => {
  let component: PhAudioComponent;
  let fixture: ComponentFixture<PhAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
