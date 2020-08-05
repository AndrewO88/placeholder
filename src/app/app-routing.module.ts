import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImgPlaceholderComponent} from './img-placeholder/img-placeholder.component';
import {RegistrationComponent} from './registration/registration.component';
import {UserInfoComponent} from './userinfo/user-info.component';
import {LoginComponent} from './login/login.component';




const routes: Routes =  [
  {path: '', component: LoginComponent},
  {path: 'reg', component: RegistrationComponent},
  {path: 'info', component: UserInfoComponent},
  {path: 'lol', component: ImgPlaceholderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
