import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdTheoplayerContainerComponent } from './cd-theoplayer-container.component';

describe('CdTheoplayerContainerComponent', () => {
  let component: CdTheoplayerContainerComponent;
  let fixture: ComponentFixture<CdTheoplayerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdTheoplayerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdTheoplayerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
