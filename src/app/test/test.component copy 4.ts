import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h2>Welcome {{name}}</h2>
  <h2 class ="text-success">Marcelo Poblete</h2>
  <h2 [class] ="successClass">Marcelo Poblete</h2>
  <h2 class ="text-special" [class]="successClass">Marcelo Poblete</h2>
  <h2 [class.text-danger]= "hasError" class ="text-special" >Marcelo Poblete</h2>
  <h2 [ngClass]="messageClasses"  >Text</h2>
  <h2 [style.color]= "hasError ? 'red' : 'green'"  >Style Binding</h2>
  <h2 [style.color]= "highlightColor "  >Style Binding2</h2>
  <h2 [ngStyle]= "titleStyles "  >Style Binding3</h2>
  `,
  styles: []
})
export class TestComponent implements OnInit {
public name = "Marcelo";
public successClass = "text-success";
public myId = "testId";
public isDisabled = false;
public hasError = false;
public isSpecial = true;
public highlightColor = "orange";
public titleStyles = {
  color: "blue",
  fontStyle: "italic"
}



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
