import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressControlGroupComponent } from './address-control-group.component';

describe('AddressControlGroupComponent', () => {
  let component: AddressControlGroupComponent;
  let fixture: ComponentFixture<AddressControlGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressControlGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressControlGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
