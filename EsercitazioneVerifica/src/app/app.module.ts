import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CibiComponent } from './cibi/cibi.component';
import { HeaderPaginaComponent } from './header-pagina/header-pagina.component';
import { OrdinazioneComponent } from './ordinazione/ordinazione.component';

@NgModule({
  declarations: [
    AppComponent,
    CibiComponent,
    HeaderPaginaComponent,
    OrdinazioneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
