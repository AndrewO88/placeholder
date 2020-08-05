import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImgPlaceholderComponent} from './img-placeholder/img-placeholder.component';
import {RegistrationComponent} from './registration/registration.component';
import {UserInfoComponent} from './userinfo/user-info.component';




const routes: Routes =  [
  {path: '', component: ImgPlaceholderComponent},
  {path: 'reg', component: RegistrationComponent},
  {path: 'info', component: UserInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
