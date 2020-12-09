import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AddtoFavModule} from './addto-fav/addto-fav.module';
import { HttpClientModule } from '@angular/common/http';
import { NavFavComponent } from './nav-fav/nav-fav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavFavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AddtoFavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
