import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdFooterComponent } from './cd-footer.component';

describe('CdFooterComponent', () => {
  let component: CdFooterComponent;
  let fixture: ComponentFixture<CdFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
