import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IaResultMetadataContainerComponent } from './ia-result-metadata-container.component';

describe('IaResultMetadataContainerComponent', () => {
  let component: IaResultMetadataContainerComponent;
  let fixture: ComponentFixture<IaResultMetadataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IaResultMetadataContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IaResultMetadataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
