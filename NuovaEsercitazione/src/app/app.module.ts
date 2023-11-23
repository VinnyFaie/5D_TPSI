import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { IntestazioneComponent } from './intestazione/intestazione.component';
import { CiboComponent } from './cibo/cibo.component';
import { LibriComponent } from './libri/libri.component';
import { ComponenteFiglioLibriComponent } from './componente-figlio-libri/componente-figlio-libri.component';
import { MainComponent } from './main/main.component';
import { ChildCiboComponent } from './child-cibo/child-cibo.component';

@NgModule({
  declarations: [
    AppComponent,
    IntestazioneComponent,
    CiboComponent,
    LibriComponent,
    ComponenteFiglioLibriComponent,
    MainComponent,
    ChildCiboComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
