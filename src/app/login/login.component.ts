import { Component, OnInit } from '@angular/core';
import {ErrorService} from '../services/error.service';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Login, USER_INFO} from '../config/interface';
import {LocalstorageService} from '../services/localstorage.service';
import {RegSrvService} from '../services/reg-srv.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error$: Observable<string>;

  form = new FormGroup({});
  model: Login = {
    email: '',
    password: '',
    checkbox: false
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [{
    validators: {
      validation: [
        {name: 'fieldMatch', options: {errorPath: 'passwordConfirm'}},
      ],
    },
    fieldGroup: [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'email',
          placeholder: 'email',
          required: true,
        },
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          type: 'password',
          label: 'password',
          placeholder: 'Must be at least 5 characters',
          required: true,
          minLength: 5,
        },
      },
      {
        key: 'checkbox',
        type: 'checkbox',
        templateOptions: {
          label: 'Запомнить меня',
        },
      },
    ],
  }];
  constructor(
    public errSrv: ErrorService,
    private localSrv: LocalstorageService,
    private regSrv: RegSrvService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.error$ = this.errSrv.error$;
    const startData = this.localSrv.load(USER_INFO);
    if (!startData) {
      return;
    }
    this.model = JSON.parse(startData);
  }
  onSubmit(): void  {
    if (this.regSrv.auth(this.model)) {
      this.errSrv.error$.next('');
      this.router.navigate(['info']).finally(undefined);
    } else {
      this.errSrv.error$.next('Ошибка! Неверный логин или пароль.');
    }
    if (this.model.checkbox) {
      this.localSrv.save(this.model, USER_INFO);
    }
  }
}
