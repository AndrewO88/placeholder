import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgPlaceholderComponent } from './img-placeholder/img-placeholder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { RegistrationComponent } from './registration/registration.component';
import {AbstractControl, ReactiveFormsModule} from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import {AppRoutingModule} from './app-routing.module';
import { UserInfoComponent } from './userinfo/user-info.component';
import { LoginComponent } from './login/login.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

export function minlengthValidationMessages(err, field): string {
  return `Should have atleast ${field.templateOptions.minLength} characters`;
}
export function fieldMatchValidator(control: AbstractControl): {fieldMatch: {message: string}} {
  const { password, passwordConfirm } = control.value;

  // avoid displaying the message error when values are empty
  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { fieldMatch: { message: 'Password Not Matching' } };
}

@NgModule({
  declarations: [
    AppComponent,
    ImgPlaceholderComponent,
    RegistrationComponent,
    UserInfoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    DragDropModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validators: [
        {name: 'fieldMatch', validation: fieldMatchValidator},
      ],
      validationMessages: [
        {name: 'required', message: 'This field is required'},
        {name: 'minlength', message: minlengthValidationMessages},

      ],
    }),
    FormlyMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
