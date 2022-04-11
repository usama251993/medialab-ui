import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StApplicationContainerComponent } from './st-application-container.component';

describe('StApplicationContainerComponent', () => {
  let component: StApplicationContainerComponent;
  let fixture: ComponentFixture<StApplicationContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StApplicationContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StApplicationContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
