import { Component } from '@angular/core';

@Component({
  selector: 'componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})
export class ComponentePadreComponent {
  url: string = "https://regel.mauroracca.repl.co/";
  data: any;
  dataPresa: boolean=false;
  classi: any=[];
  numeroPremi: number = 0;
  keyClasse: any;
  showPass: boolean = false;

  getData() {
    fetch(this.url)
      .then(response => response.json())
      .then(json => {
        this.data = json;
        console.log(this.data);
        this.dataPresa = true;


      })
      .catch(err => console.error("Request failed: ", err));
  }

  getClasse(key: any) {
    this.classi=this.data[key];
    this.keyClasse = key;
    console.log(this.classi);
  }

  getNclassi(nClassi: any) {
    this.numeroPremi=nClassi;
  }
}
