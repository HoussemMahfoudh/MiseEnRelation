import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutpreferanceComponent } from './ajoutpreferance.component';

describe('AjoutpreferanceComponent', () => {
  let component: AjoutpreferanceComponent;
  let fixture: ComponentFixture<AjoutpreferanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutpreferanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutpreferanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
