import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdFooterContainerComponent } from './cd-footer-container.component';

describe('CdFooterContainerComponent', () => {
  let component: CdFooterContainerComponent;
  let fixture: ComponentFixture<CdFooterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdFooterContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
