import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterexperianceComponent } from './ajouterexperiance.component';

describe('AjouterexperianceComponent', () => {
  let component: AjouterexperianceComponent;
  let fixture: ComponentFixture<AjouterexperianceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterexperianceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterexperianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
