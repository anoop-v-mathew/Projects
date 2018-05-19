import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuVendorListComponent } from './cu-vendor-list.component';

describe('CuVendorListComponent', () => {
  let component: CuVendorListComponent;
  let fixture: ComponentFixture<CuVendorListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuVendorListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuVendorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
