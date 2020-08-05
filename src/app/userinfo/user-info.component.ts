import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User, USER_INFO} from '../config/interface';
import {RegSrvService} from '../services/reg-srv.service';
import {LocalstorageService} from '../services/localstorage.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userData: Observable<User[]>;
  constructor(
    private regSrv: RegSrvService,
    private localSrv: LocalstorageService,
  ) { }

  ngOnInit(): void {
    this.userData = this.regSrv.users$;
  }

  deleteThis(card: User): void {
    this.regSrv.deleteThis(card);
  }

  logOut(): void {
    this.localSrv.delete(USER_INFO);
  }
}
