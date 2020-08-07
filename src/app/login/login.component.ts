import {Component, OnDestroy, OnInit} from '@angular/core';
import {ErrorService} from '../services/error.service';
import {interval, Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {Login, USER_INFO} from '../config/interface';
import {LocalstorageService} from '../services/localstorage.service';
import {RegSrvService} from '../services/reg-srv.service';
import {Router} from '@angular/router';
import {LOGIN_FORM} from '../config/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {debounce, filter, startWith, tap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  // error$: Observable<string>;
  private subs: Subscription[] = [];
  form = new FormGroup({});
  model: Login = {
    email: '',
    password: '',
    checkbox: false
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = LOGIN_FORM;
  constructor(
    public errSrv: ErrorService,
    private localSrv: LocalstorageService,
    private regSrv: RegSrvService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    // this.error$ = this.errSrv.error$;
    this.subs.push(this.errSrv.error$.pipe(
      startWith(''),
      tap((err) => console.log(err)),
      debounce((() => interval(500))),
      filter((text) => !!text)
    ).subscribe((err) => {
      this.snackBar.open( err, 'ок',
        {duration: 2000});
    }));
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
  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
