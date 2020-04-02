import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'class-binding',
  template: `
    <button [class.color] = "esActivo">Color</button>
  `,
  styles: [`  
    .color{
      background: red;
    }
  `]
})
export class ClassBindingComponent {

  esActivo = true;

}
