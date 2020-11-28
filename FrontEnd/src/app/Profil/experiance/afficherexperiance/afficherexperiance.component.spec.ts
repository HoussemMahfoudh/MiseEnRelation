import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherexperianceComponent } from './afficherexperiance.component';

describe('AfficherexperianceComponent', () => {
  let component: AfficherexperianceComponent;
  let fixture: ComponentFixture<AfficherexperianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherexperianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherexperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
