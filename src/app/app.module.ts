import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImgPlaceholderComponent } from './img-placeholder/img-placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgPlaceholderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
