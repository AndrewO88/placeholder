import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../img-placeholder/interface';
import {RegSrvService} from '../services/reg-srv.service';


@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  userData: Observable<User[]>;
  constructor(
    private regSrv: RegSrvService
  ) { }

  ngOnInit(): void {
  }
}
