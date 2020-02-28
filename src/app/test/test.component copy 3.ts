import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h2>Welcome {{name}}</h2>
  <h2 class ="text-success">Marcelo Poblete</h2>
  <h2 [class] ="successClass">Marcelo Poblete</h2>
  <h2 class ="text-special" [class]="successClass">Marcelo Poblete</h2>
  <h2 [class.text-danger]= "hasError" class ="text-special" >Marcelo Poblete</h2>
  <h2 [ngClass]="messageClasses"  >Text</h2>

  `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {
public name = "Marcelo";
public successClass = "text-success";
public myId = "testId";
public isDisabled = true;
public hasError = true;
public isSpecial = true;
public messageClasses = {
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special":this.isSpecial
}

public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " +this.name;
  }

}
