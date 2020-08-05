import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../img-placeholder/interface';
import {RegSrvService} from '../services/reg-srv.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userData: Observable<User[]>;
  constructor(
    private regSrv: RegSrvService
  ) { }

  ngOnInit(): void {
    this.userData = this.regSrv.users$;
  }

  deleteThis(card: User): void {
    this.regSrv.deleteThis(card);
  }
}
