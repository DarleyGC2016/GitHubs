import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GithubsService {
  static user = new EventEmitter();
  apiUrl = 'http://api.github.com';

  constructor(private httpClient: HttpClient) {}

  addUser(name: string): void {
    GithubsService.user.emit(name);
  }

  public getRepository(user: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/users/${user}/repos`);
  }

  public getBranches(fullname: string): Observable<any> {
    return this.httpClient.get<any>(
      `${this.apiUrl}/repos/${fullname}/branches`
    );
  }
  public getBranchesWithBranch(
    fullname: string,
    branch: string
  ): Observable<any> {
    return this.httpClient.get<any>(
      `${this.apiUrl}/repos/${fullname}/branches/${branch}`
    );
  }
  public getCommits(url: string): Observable<any> {
    return this.httpClient.get<any>(url);
  }
}
