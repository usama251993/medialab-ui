import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhSankeyComponent } from './ph-sankey.component';

describe('PhSankeyComponent', () => {
  let component: PhSankeyComponent;
  let fixture: ComponentFixture<PhSankeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhSankeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhSankeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
