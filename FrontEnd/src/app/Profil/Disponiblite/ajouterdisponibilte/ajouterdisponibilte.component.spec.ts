import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterdisponibilteComponent } from './ajouterdisponibilte.component';

describe('AjouterdisponibilteComponent', () => {
  let component: AjouterdisponibilteComponent;
  let fixture: ComponentFixture<AjouterdisponibilteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterdisponibilteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterdisponibilteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
