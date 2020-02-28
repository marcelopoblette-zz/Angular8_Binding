import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h2>Welcome {{name}}</h2>
  <h2>{{2+2}}</h2>
  <h2>{{"Welcome "+ name}}</h2>
  <h2>{{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
  <!-- <h2>{{a=2+2}}</h2> assignments -->
  <h2>{{siteUrl}}</h2>
  
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {
public name = "Marcelo";
public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " +this.name;
  }

}
