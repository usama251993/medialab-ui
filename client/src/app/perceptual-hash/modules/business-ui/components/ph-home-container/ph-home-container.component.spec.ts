import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhHomeContainerComponent } from './ph-home-container.component';

describe('PhHomeContainerComponent', () => {
  let component: PhHomeContainerComponent;
  let fixture: ComponentFixture<PhHomeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhHomeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhHomeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
