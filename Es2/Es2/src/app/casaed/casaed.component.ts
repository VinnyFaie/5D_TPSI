import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonService} from "../service/common.service";

@Component({
  selector: 'casaed',
  templateUrl: './casaed.component.html',
  styleUrls: ['./casaed.component.css']
})
export class CasaedComponent {

  constructor(private commonService: CommonService) {

  }

  casaEditrice = [
    {
      cod: 1,
      nome: 'Mondadori',
      sede: 'Milano',
      capSociale: 1000
    },
    {
      cod: 2,
      nome: 'Feltrinelli',
      sede: 'Firenze',
      capSociale: 500
    },
    {
      cod: 3,
      nome: 'Sellerio',
      sede: 'Catania',
      capSociale: 750
    }];

  @Input() codCasa: number = 0; //direttiva importata da Angular core
  lastUser: string = "";
  @Output() sendLastUser = new EventEmitter(); //direttiva importata da Angular core
  objUser: any = {};


  visCodCasa() {
    console.log("Casa Ed from father: "+this.codCasa);
    console.log("Last user from service: " + this.commonService.lastUserService);
  }

  inviaLastUser() {
    this.objUser.user = this.lastUser;
    this.objUser.dataPrestito = new Date;
    this.objUser.nGiorni = 15;
    this.sendLastUser.emit(this.objUser); //emissione dell'evento
  }



}
