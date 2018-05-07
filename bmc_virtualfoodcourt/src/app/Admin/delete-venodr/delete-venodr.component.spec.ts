import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVenodrComponent } from './delete-venodr.component';

describe('DeleteVenodrComponent', () => {
  let component: DeleteVenodrComponent;
  let fixture: ComponentFixture<DeleteVenodrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteVenodrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVenodrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
