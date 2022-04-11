import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeOverviewComponent } from './st-home-overview.component';

describe('StHomeOverviewComponent', () => {
  let component: StHomeOverviewComponent;
  let fixture: ComponentFixture<StHomeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
