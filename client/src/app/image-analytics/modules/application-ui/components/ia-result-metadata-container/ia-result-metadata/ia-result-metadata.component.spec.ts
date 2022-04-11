import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaResultMetadataComponent } from './ia-result-metadata.component';

describe('IaResultMetadataComponent', () => {
  let component: IaResultMetadataComponent;
  let fixture: ComponentFixture<IaResultMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaResultMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
