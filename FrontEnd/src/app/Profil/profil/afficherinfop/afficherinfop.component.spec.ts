import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherinfopComponent } from './afficherinfop.component';

describe('AfficherinfopComponent', () => {
  let component: AfficherinfopComponent;
  let fixture: ComponentFixture<AfficherinfopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherinfopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherinfopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
