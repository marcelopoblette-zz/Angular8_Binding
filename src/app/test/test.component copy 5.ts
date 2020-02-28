import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}</h2>
  <button (click)= "onClick($event)">Greet</button>
  <button (click)= "greeting = 'Welcome Marcelo'">Greet</button>
  {{greeting}}
  
  `,
  styles: []
})
export class TestComponent implements OnInit {
public name = "Marcelo";
public greeting ="";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event){
    console.log(event)
    this.greeting = 'Welcome to my Proyect2';
  }

  greetUser(){
    return "Hello " +this.name;
  }

}
