import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelMenuComponent } from './del-menu.component';

describe('DelMenuComponent', () => {
  let component: DelMenuComponent;
  let fixture: ComponentFixture<DelMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DelMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
