import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhAudioContainerComponent } from './ph-audio-container.component';

describe('PhAudioContainerComponent', () => {
  let component: PhAudioContainerComponent;
  let fixture: ComponentFixture<PhAudioContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhAudioContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhAudioContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
