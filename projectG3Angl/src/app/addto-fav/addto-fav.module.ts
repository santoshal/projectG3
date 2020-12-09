import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AddtoFavComponent } from './addto-fav.component';




@NgModule({
  declarations: [AddtoFavComponent],
  imports: [
    BrowserModule,CommonModule,MatButtonModule,MatIconModule
  ],
  exports:[AddtoFavComponent]
})
export class AddtoFavModule { }
