import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ArticoloComponent } from './articolo/articolo.component';
import { Books2Component } from './books2/books2.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticoloComponent,
    Books2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
