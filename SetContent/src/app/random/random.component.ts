import { Component } from '@angular/core';

@Component({
  selector: 'random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  random: number=0;

  genera() {
    this.random = Math.floor(Math.random()*25 + 1);
  }
}
