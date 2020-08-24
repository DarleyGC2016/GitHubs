import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReposistoryComponent } from './list-reposistory.component';

describe('ListReposistoryComponent', () => {
  let component: ListReposistoryComponent;
  let fixture: ComponentFixture<ListReposistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReposistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReposistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
