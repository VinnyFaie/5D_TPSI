import { Injectable } from '@angular/core';
//è simile ad un componente, con la differenza di "injectable"...
//ciò vuol dire che il servizio può essere passato agli altri componenti
//quindi tutto ciò che io passo agli altri componenti,
//esso sarà raggiungibile dagli altri componenti.
//è come usare le variabili globali.
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public lastUserService: string = "Paperino";
  constructor() { }
}
