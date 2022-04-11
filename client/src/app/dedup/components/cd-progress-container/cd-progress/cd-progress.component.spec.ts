import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdProgressComponent } from './cd-progress.component';

describe('CdProgressComponent', () => {
  let component: CdProgressComponent;
  let fixture: ComponentFixture<CdProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
