import { Component } from '@angular/core';

@Component({
  selector: 'componente-figlio-libri',
  templateUrl: './componente-figlio-libri.component.html',
  styleUrls: ['./componente-figlio-libri.component.css']
})
export class ComponenteFiglioLibriComponent {

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


}
