import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdProgressContainerComponent } from './cd-progress-container.component';

describe('CdProgressContainerComponent', () => {
  let component: CdProgressContainerComponent;
  let fixture: ComponentFixture<CdProgressContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdProgressContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdProgressContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
