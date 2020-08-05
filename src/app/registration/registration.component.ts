import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {User} from '../img-placeholder/interface';
import {RegSrvService} from '../services/reg-srv.service';
import {Router} from '@angular/router';

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
  fields: FormlyFieldConfig[] = [
    {
    key: 'userData',
    fieldGroupClassName: 'display-flex',
    fieldGroup: [
      {
        key: 'name',
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          label: 'Имя',
          required: true,
        },
      },
      {
        key: 'surname',
        className: 'flex-1',
        type: 'input',
        templateOptions: {
          label: 'Фамилия',
          required: true,
        },
      },
    ],
  },
    {
      validators: {validation: [{name: 'fieldMatch', options: {errorPath: 'passwordConfirm'}}, ], },
      key: 'userData',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'birthday',
          type: 'input',
          templateOptions: {
            label: 'Дата рождения',
            type: 'date',
            required: true,
          },
        },
        {
          key: 'gender',
          type: 'radio',
          templateOptions: {
            label: 'Пол',
            placeholder: 'Пол',
            required: true,
            options: [
              {value: 'male', label: 'Мужской'},
              {value: 'female', label: 'Женский'},
            ],
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          key: 'login',
          className: 'flex-2',
          type: 'input',
          templateOptions: {
            label: 'Имя аккаунта',
            required: true,
          },
        },
        {
          key: 'email',
          className: 'flex-2  padding-left-0',
          type: 'select',
          templateOptions: {
            label: 'email',
            required: true,
            options: [
              {label: '@mail.ru', value: '@mail.ru'},
              {label: '@icloud.com', value: '@icloud.com'},
              {label: '@bk.ru', value: '@bk.ru'},
              {label: '@list.ru', value: '@list.ru'}
            ],
          },
        },
      ],
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Password',
            placeholder: 'Must be at least 5 characters',
            required: true,
            minLength: 5,
          },
        },
      ],
    },
    {
      key: 'userData',
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          key: 'passwordConfirm',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'Please re-enter your password',
            required: true,
          },
        },
        {
          key: 'phone',
          type: 'input',
          templateOptions: {
            label: 'Телефон',
            placeholder: '+7-xxx-xxx-xx-xx',
            addonLeft: {
              text: '+7',
            },
            required: true,
          },
        },
      ],
    },
  ];


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
    this.router.navigate(['/info']).finally(undefined);
  }
}

