import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataBasicControlGroupComponent } from './personal-data-basic-control-group.component';

describe('PersonalDataBasicControlGroupComponent', () => {
  let component: PersonalDataBasicControlGroupComponent;
  let fixture: ComponentFixture<PersonalDataBasicControlGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataBasicControlGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataBasicControlGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
