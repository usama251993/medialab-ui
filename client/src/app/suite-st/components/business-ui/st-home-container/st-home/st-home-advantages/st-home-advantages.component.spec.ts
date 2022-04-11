import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StHomeAdvantagesComponent } from './st-home-advantages.component';

describe('StHomeAdvantagesComponent', () => {
  let component: StHomeAdvantagesComponent;
  let fixture: ComponentFixture<StHomeAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StHomeAdvantagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StHomeAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
