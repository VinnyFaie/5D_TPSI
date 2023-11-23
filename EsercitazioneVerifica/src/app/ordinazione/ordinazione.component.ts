import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'ordinazione',
  templateUrl: './ordinazione.component.html',
  styleUrls: ['./ordinazione.component.css']
})
export class OrdinazioneComponent {
  @Input() vetOrdini:any;
  @Output() sendNpasti = new EventEmitter();
  nPasti: number = 0;


}
