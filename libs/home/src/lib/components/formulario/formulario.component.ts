import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'mf-solucoes-aws-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  
  form: FormGroup;

  constructor() {
    this.form = this.setForm();
  }

  ngOnInit(): void {}

  setForm(){
    return this.form = new FormGroup({
      nome: new FormControl(null, Validators.required),
      sobrenome: new FormControl(null, Validators.required),
      telefone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
  }

  onSubmit(){

  }
}
