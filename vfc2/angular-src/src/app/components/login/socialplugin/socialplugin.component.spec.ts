import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialpluginComponent } from './socialplugin.component';

describe('SocialpluginComponent', () => {
  let component: SocialpluginComponent;
  let fixture: ComponentFixture<SocialpluginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialpluginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialpluginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
