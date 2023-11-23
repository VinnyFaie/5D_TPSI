import { Component } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  url: string = "https://servermeals--mauroracca.repl.co";
  data: any;
  mealsForChild: any=[];
  numeroPasti:number = 0;
  pastiPresi: any=[];
  vetPasti:any=[];

  getData() {
    fetch(this.url)
      .then(response => response.json())
      .then(json => {
        this.data = json;
        console.log(this.data);


      })
      .catch(err => console.error("Request failed: ", err));
  }

  getMeals(key: any) {
    this.mealsForChild=this.data[key];
    console.log(this.mealsForChild);
    console.log(this.pastiPresi);
  }


  getNpasti(Pasti: any) {
    this.pastiPresi=Pasti;
    console.log(Pasti);
    console.log(this.pastiPresi);
  }











}
