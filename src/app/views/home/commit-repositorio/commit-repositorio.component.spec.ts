import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitRepositorioComponent } from './commit-repositorio.component';

describe('CommitRepositorioComponent', () => {
  let component: CommitRepositorioComponent;
  let fixture: ComponentFixture<CommitRepositorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitRepositorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitRepositorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
