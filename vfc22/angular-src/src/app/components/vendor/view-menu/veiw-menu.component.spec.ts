import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwMenuComponent } from './veiw-menu.component';

describe('VeiwMenuComponent', () => {
  let component: VeiwMenuComponent;
  let fixture: ComponentFixture<VeiwMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
