import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationchercheurJComponent } from './registrationchercheur-j.component';

describe('RegistrationchercheurJComponent', () => {
  let component: RegistrationchercheurJComponent;
  let fixture: ComponentFixture<RegistrationchercheurJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationchercheurJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationchercheurJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
