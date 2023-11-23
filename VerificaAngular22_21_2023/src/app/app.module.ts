import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentePrincipaleComponent } from './componente-principale/componente-principale.component';
import { IntestazioneComponent } from './intestazione/intestazione.component';
import { ComponentePadreComponent } from './componente-padre/componente-padre.component';
import { ComponenteFiglioComponent } from './componente-figlio/componente-figlio.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ComponentePrincipaleComponent,
    IntestazioneComponent,
    ComponentePadreComponent,
    ComponenteFiglioComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
