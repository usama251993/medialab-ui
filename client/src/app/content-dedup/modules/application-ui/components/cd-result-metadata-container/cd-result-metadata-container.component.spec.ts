import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdResultMetadataContainerComponent } from './cd-result-metadata-container.component';

describe('CdResultMetadataContainerComponent', () => {
  let component: CdResultMetadataContainerComponent;
  let fixture: ComponentFixture<CdResultMetadataContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdResultMetadataContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultMetadataContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
