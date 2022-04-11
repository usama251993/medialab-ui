import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StFooterContainerComponent } from './st-footer-container.component';

describe('StFooterContainerComponent', () => {
  let component: StFooterContainerComponent;
  let fixture: ComponentFixture<StFooterContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StFooterContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StFooterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
