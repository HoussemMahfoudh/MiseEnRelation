import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChercheurDetailsComponent } from './chercheur-details.component';

describe('ChercheurDetailsComponent', () => {
  let component: ChercheurDetailsComponent;
  let fixture: ComponentFixture<ChercheurDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChercheurDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChercheurDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
