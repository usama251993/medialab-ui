import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPhashResultContainerComponent } from './ph-phash-result-container.component';

describe('PhPhashResultContainerComponent', () => {
  let component: PhPhashResultContainerComponent;
  let fixture: ComponentFixture<PhPhashResultContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhPhashResultContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPhashResultContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
