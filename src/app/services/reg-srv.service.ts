import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from '../img-placeholder/interface';

@Injectable({
  providedIn: 'root'
})
export class RegSrvService {
  users$: BehaviorSubject<User[]>;


  constructor() {
    this.users$ = new BehaviorSubject<User[]>([
      {
        login: 'string',
        email: 'string',
        password: 'string',
        userData: {
          id: 'string',
          name: 'string',
          surname: 'string',
          birthday: 'string',
          gender: 'string',
          phone: 'string',
        }}
    ]);
  }

  add(model: User): void {
    const users: User[] = [...this.users$.value];
    users.push(model);
    this.users$.next(users);
  }
}
