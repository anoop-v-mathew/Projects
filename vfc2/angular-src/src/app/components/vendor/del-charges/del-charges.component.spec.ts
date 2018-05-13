import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelChargesComponent } from './del-charges.component';

describe('DelChargesComponent', () => {
  let component: DelChargesComponent;
  let fixture: ComponentFixture<DelChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
