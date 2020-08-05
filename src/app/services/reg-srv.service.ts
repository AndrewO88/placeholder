import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Login, User} from '../config/interface';


@Injectable({
  providedIn: 'root'
})
export class RegSrvService {
  users$: BehaviorSubject<User[]>;


  constructor() {
    this.users$ = new BehaviorSubject<User[]>([
      {
        login: 'test',
        email: 'email',
        password: 'password',
        userData: {
          id: 'id',
          name: 'name',
          surname: 'surname',
          birthday: 'birthday',
          gender: 'gender',
          phone: 'phone',
        }
      },
      {
        login: 'mugabe',
        email: '@mail.ru',
        password: '123123123',
        userData: {
          id: 'id',
          name: 'robert',
          surname: 'mugabe',
          birthday: '21.02.1924',
          gender: 'male',
          phone: '+71488666',
        }
      },
      {
        login: 'fantomas',
        email: '@bk.ru',
        password: 'password',
        userData: {
          id: 'id',
          name: 'Louis',
          surname: 'de Funès',
          birthday: '‎27.01.1983‎',
          gender: 'male',
          phone: '+76661488',
        }
      }
    ]);
  }

  add(model: User): void {
    const users: User[] = [...this.users$.value];
    users.push(model);
    this.users$.next(users);
  }

  deleteThis(dataCard): void {
    const users: User[] = [...this.users$.value];
    const index = users.indexOf(dataCard);
    users.splice(index, 1);
    this.users$.next(users);
  }

  auth(model: Login): boolean {
    const users: User[] = [...this.users$.value];
    if (users.find(value => (value.password === model.password) && (value.login + value.email === model.email))) {
      return true;
    } else {
      return false;
    }

  }
}
