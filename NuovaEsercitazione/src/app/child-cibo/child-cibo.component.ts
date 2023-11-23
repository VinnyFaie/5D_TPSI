import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'child-cibo',
  templateUrl: './child-cibo.component.html',
  styleUrls: ['./child-cibo.component.css']
})
export class ChildCiboComponent {
  @Input() vetPasti:any=[];
  @Output() sendPasti = new EventEmitter();
  pastiPresi: any = [];
  nPasty: number = 0;

  seePasti() {

      this.sendPasti.emit(this.pastiPresi);
  }


}
