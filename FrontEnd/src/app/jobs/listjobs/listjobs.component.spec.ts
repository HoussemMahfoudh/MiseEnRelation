import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListjobsComponent } from './listjobs.component';

describe('ListjobsComponent', () => {
  let component: ListjobsComponent;
  let fixture: ComponentFixture<ListjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
