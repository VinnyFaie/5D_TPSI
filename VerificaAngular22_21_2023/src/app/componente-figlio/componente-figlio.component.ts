import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'componente-figlio',
  templateUrl: './componente-figlio.component.html',
  styleUrls: ['./componente-figlio.component.css']
})
export class ComponenteFiglioComponent {
  @Input() vetClassi:any;
  @Output() sendClassi = new EventEmitter();
  nPremi: number = 0;
  showPass: boolean = false;
  nomeClasse: any;


  click_ContaPremi() {
    this.nPremi = 0;
    for(let alunno of this.vetClassi){
      this.nPremi += alunno.premi;
      console.log(this.nPremi);
    }
    console.log("Tot: "+this.nPremi);

    this.sendClassi.emit(this.nPremi);
  }

  mostraVal() {
    console.log(this.showPass);
  }
}
