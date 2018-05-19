import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwChargesComponent } from './veiw-charges.component';

describe('VeiwChargesComponent', () => {
  let component: VeiwChargesComponent;
  let fixture: ComponentFixture<VeiwChargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwChargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
