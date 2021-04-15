import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'Leche',
    precio: 10,
    existencia: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls.precio?.touched &&
      this.miFormulario?.controls.producto?.value < 0
    );
  }

  //guardar(miFormulario: NgForm)
  guardar() {
    //console.log('miFormulario', this.miFormulario);
    this.miFormulario.resetForm({
      producto: 'New Produc',
      precio: 0,
      existencia: 0,
    });
  }
}
