import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdTheoplayerComponent } from './cd-theoplayer.component';

describe('CdTheoplayerComponent', () => {
  let component: CdTheoplayerComponent;
  let fixture: ComponentFixture<CdTheoplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdTheoplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdTheoplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
