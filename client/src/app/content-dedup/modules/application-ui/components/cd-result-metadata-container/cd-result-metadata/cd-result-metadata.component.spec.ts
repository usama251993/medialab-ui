import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdResultMetadataComponent } from './cd-result-metadata.component';

describe('CdResultMetadataComponent', () => {
  let component: CdResultMetadataComponent;
  let fixture: ComponentFixture<CdResultMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdResultMetadataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdResultMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
