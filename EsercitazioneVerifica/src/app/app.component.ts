import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EsercitazioneVerifica';


  //qui scrivo il codice
  url: string = "https://servermeals--mauroracca.repl.co";
  data: any;
  nPiatti: number = 0;
  piattiOrdinati: any={};
  mostraPiattiOrdinati: boolean = false;

  getData() {
    fetch(this.url)
      .then(response => response.json())
      .then(json => {
        this.data = json;
        console.log(this.data);


      })
      .catch(err => console.error("Request failed: ", err));
  }


  aggiungiPiatto(piatto: any) {
    this.nPiatti++;
    this.piattiOrdinati=piatto;
    console.log(this.piattiOrdinati);
  }


  mostra() {
    if(this.piattiOrdinati != null){
      this.mostraPiattiOrdinati = true;
      this.piattiOrdinati.emit(this.nPiatti);
    }
  }

  getNpasti(nPasti: any) {
    this.nPiatti=nPasti;
  }
}
