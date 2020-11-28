import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListchercheurJComponent } from './listchercheur-j.component';

describe('ListchercheurJComponent', () => {
  let component: ListchercheurJComponent;
  let fixture: ComponentFixture<ListchercheurJComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListchercheurJComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListchercheurJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
