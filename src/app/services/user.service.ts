import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { USERS } from '../data/mock-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

    user ?: User;


  getUsers(): Observable<User[]> {
    // our mocked users
    const users = of(USERS);

    return users;
  }

  getUser(userid: number): Observable<User> {
    const user = USERS.find((user) => user.id === userid)!;

    return of(user);
  }

  updateUser(values: object, id: number) {
    const users = of(USERS);

    const user = users.pipe(
      map((data) => {
        data.filter((item) => item.id === id), map((item) => (item = values));
      })
    );
  }

  removeUser(id: number): Observable<User[]> {
   let users =  of(USERS).pipe(
      map((data) => {
        return data.filter((item) => item.id !== id);
      })
    );


    return users;
  }

  addUser(values:any):Observable <User[]>{
    const user = {} as User;
    user.name = values.name;
    user.email = values.email;
    user.address = values.address;
    USERS.push(user);
    return of(USERS)
  }
}
