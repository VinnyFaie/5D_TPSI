import { Component } from '@angular/core';

@Component({
  selector: 'pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  pizza:string = "pizza quattro stagioni";
  pasta:string = "PASTA ALLA CARBONARA";
  valuta:number = 1235.51;
  piGreco:number = 3.14159265359;
  percent:number = 0.15
  vectPipe = ["Fiat","Ford","Renault","BMW","Mercedes","Dacia"];
  today:Date = new Date();


}
