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
        login: 'login',
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
}
