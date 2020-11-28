import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexprofilComponent } from './indexprofil.component';

describe('IndexprofilComponent', () => {
  let component: IndexprofilComponent;
  let fixture: ComponentFixture<IndexprofilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
