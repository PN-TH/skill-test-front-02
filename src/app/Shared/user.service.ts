import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user : User;
  data: User[] = [];
  id: number;

  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<{data: User[]}>(`${this.apiUrl}`)
  }

  getIdUser(): Observable<any> {
    return this.http.get<{data: User[]}>(`${this.apiUrl}`+ this.id)
  }
}