import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ImgPlaceholderComponent} from './img-placeholder/img-placeholder.component';
import {RegistrationComponent} from './registration/registration.component';
import {UserinfoComponent} from './userinfo/userinfo.component';




const routes: Routes =  [
  {path: '', component: ImgPlaceholderComponent},
  {path: 'reg', component: RegistrationComponent},
  {path: 'info', component: UserinfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
