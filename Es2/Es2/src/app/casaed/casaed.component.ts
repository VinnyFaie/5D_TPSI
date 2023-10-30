import {Component, Input} from '@angular/core';

@Component({
  selector: 'casaed',
  templateUrl: './casaed.component.html',
  styleUrls: ['./casaed.component.css']
})
export class CasaedComponent {
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
}
