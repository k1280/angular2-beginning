import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: ` 
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
  <label>name: </label>
  <input value="{{hero.name}}" placeholder="name">
  </div>
  `,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  counter2 = 0;

  // constructor(){
  //   setInterval(() => {
  //     this.counter++;
  //   }, 500)

  //   setInterval(() => {
  //     this.counter2++;
  //   }, 1200)
  // }
}
