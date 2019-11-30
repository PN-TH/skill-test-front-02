import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  data: User[] = [];
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers() {
    this.http.get<{data: User[]}>(`${this.apiUrl}`)
      .pipe(
        map((response: {data: User[]}) => {
          return response.data
        }))
        .subscribe((response: User[]) => {
          this.data.push(...response);
        });
  }
}