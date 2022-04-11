import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdResultComponent } from './cd-result.component';

describe('CdResultComponent', () => {
  let component: CdResultComponent;
  let fixture: ComponentFixture<CdResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
