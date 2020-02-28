import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test]',
  template: `<h2>Welcome {{name}}</h2>
  
 <input [id] = "myId" type="text" value="MarceloP">
 <input bind-disabled = "isDisabled"  id= "{{myId}}" type="text" value="Marcelo">
  
  `,
  styleUrls: []
})
export class TestComponent implements OnInit {
public name = "Marcelo";
public myId = "testId";
public isDisabled = true;

public siteUrl = window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "Hello " +this.name;
  }

}
