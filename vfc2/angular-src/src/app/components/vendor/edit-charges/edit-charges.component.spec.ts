import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChargesComponent } from './edit-charges.component';

describe('EditChargesComponent', () => {
  let component: EditChargesComponent;
  let fixture: ComponentFixture<EditChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditChargesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
