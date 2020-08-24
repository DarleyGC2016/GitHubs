import { TestBed } from '@angular/core/testing';

import { GithubsService } from './githubs.service';
import { HttpClient } from '@angular/common/http';

describe('GithubsService', () => {
  let service: GithubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient],
      providers: [service],
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
