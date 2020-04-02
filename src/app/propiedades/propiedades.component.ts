import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  template: `
  <img [src] = "imagenURL"/><br>
  <button [disabled] = "botonStatus">Prueba</button>
  `,
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {
  imagenURL = "https://dummyimage.com/400x200/000/fff.png";
  botonStatus = false;
}
