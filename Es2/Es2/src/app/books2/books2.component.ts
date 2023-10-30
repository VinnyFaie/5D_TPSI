import { Component } from '@angular/core';

@Component({
  selector: 'books2',
  templateUrl: './books2.component.html',
  styleUrls: ['./books2.component.css']
})
export class Books2Component {
  //A livello di DB, cEd è una chiave esterna.
  //Infatti è il codice di una casa editrice.
  books = [
    {
      author: 'Hans Christian Andersen',
      country: 'Denmark',
      pages: 784,
      title: 'Fairy tales',
      year: 1836,
      cEd:1
    },
    {
      author: 'Dante Alighieri',
      country: 'Italia',
      pages: 928,
      title: 'The Divine Comedy',
      year: 1315,
      cEd:2
    },
    {
      author: 'Jane Austen',
      country: 'United Kingdom',
      pages: 226,
      title: 'Pride and Prejudice',
      year: 1813,
      cEd:1
    },
    {
      author: 'Samuel Beckett',
      country: 'Republic of Ireland',
      pages: 256,
      title: 'Molloy, Malone Dies, The Unnamable, the trilogy',
      year: 1952,
      cEd:3
    },
    {
      author: 'Giovanni Boccaccio',
      country: 'Italia',
      pages: 1024,
      title: 'The Decameron',
      year: 1351,
      cEd:1
    },
    {
      author: 'Miguel de Cervantes',
      country: 'Spain',
      pages: 1056,
      title: 'Don Quijote De La Mancha',
      year: 1610,
      cEd:2
    },
    {
      author: 'Geoffrey Chaucer',
      country: 'England',
      pages: 544,
      title: 'The Canterbury Tales',
      year: 1450,
      cEd:1
    },
    {
      author: 'Anton Chekhov',
      country: 'Russia',
      pages: 194,
      title: 'Stories',
      year: 1886,
      cEd:2
    }
  ];

  showPages: boolean = true;
  codCasaEdForChild: number = 0; //variabile per figlio

  sendCasa(cEd: any) {
    console.log("Casa editrice: "+cEd);
    this.codCasaEdForChild=cEd; //associo il parametro dal click
  }
}
