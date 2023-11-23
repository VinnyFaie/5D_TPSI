import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'cibo',
  templateUrl: './cibo.component.html',
  styleUrls: ['./cibo.component.css']
})
export class CiboComponent {
  @Input() vetMeals:any;
  @Output() sendPasti = new EventEmitter();
  pastiPresi: any = [];
  nPasty: number = 0;
  vetPasti:any=[];
  visualizza: boolean=false;

  prenota() {
    //this.sendPasti.emit(this.nPasty);
    this.sendPasti.emit(this.pastiPresi);
    this.nPasty=0;
    console.log(this.pastiPresi);
    this.pastiPresi = [];
    this.visualizza = true;
  }

  ordina(meal:any) {
    this.pastiPresi.push(meal);
    this.nPasty++;
  }

  getPasti(Pasti: any) {
    this.pastiPresi=Pasti;
  }
}
