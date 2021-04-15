import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-swithes',
  templateUrl: './swithes.component.html',
  styles: [],
})
export class SwithesComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: ['M', Validators.required],
    condiciones: [false, Validators.requiredTrue],
  });

  persona = {
    genero: 'F',
    notificaciones: true,
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.miFormulario.reset({ ...this.persona, condiciones: false });

    this.miFormulario.valueChanges.subscribe(
      ({ condiciones, ...restodeArgumentos }) => {
        // delete form.condiciones;
        this.persona = restodeArgumentos;
      }
    );
  }

  guardar() {
    const formValue = { ...this.miFormulario.value };
    delete formValue.condiciones;

    this.persona = formValue;
  }
}
