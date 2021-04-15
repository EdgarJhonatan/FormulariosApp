import { Component } from '@angular/core';

@Component({
  selector: 'app-swiches',
  templateUrl: './swiches.component.html',
  styles: [],
})
export class SwichesComponent {
  persona = {
    genero: 'F',
    notificaciones: false,
  };

  terminosYCondiciones = false;
}
