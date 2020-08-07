import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {User} from '../config/interface';
import {RegSrvService} from '../services/reg-srv.service';
import {Router} from '@angular/router';
import {REGISTRATION_FORM} from '../config/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistrationComponent implements OnInit {
  form = new FormGroup({});
  model: User = {
    login: '',
    email: '',
    password: '',
    userData: {
      id: '',
      name: '',
      surname: '',
      birthday: '',
      gender: '',
      phone: '',
    },
  };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = REGISTRATION_FORM;


  constructor(
    private regSrv: RegSrvService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.model);
    this.regSrv.add(this.model);
    this.router.navigate(['/']).finally(undefined);
  }
}

