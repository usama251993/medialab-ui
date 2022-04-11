import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdHomeContainerComponent } from './cd-home-container.component';

describe('CdHomeContainerComponent', () => {
  let component: CdHomeContainerComponent;
  let fixture: ComponentFixture<CdHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdHomeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
