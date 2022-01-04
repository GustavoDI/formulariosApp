import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerGus } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  
})
export class RegistroComponent implements OnInit {
  //regExp
 

  miForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required, Validators.pattern(this.vs.nombreApellidoPattern) ]],
    email:['',[Validators.required, Validators.pattern(this.vs.emailPattern) ]],
    userName:['',[Validators.required, this.vs.noPuedeSerGus]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  },
  {
    Validators:[this.vs.camposIguales('password', 'password2')]
  })



  constructor(private fb : FormBuilder, private vs:ValidatorService) { }

  ngOnInit(): void {
    // para no tener problemas con la validación pasamos un valor al nombre
    this.miForm.reset({
      nombre:'Gustavo Diaz',
      email:'test@test.com',
      userName:'Franco'
    })
  }

  campoNoValido(campo:string){
  return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched;
  
  }

  submitFormulario(){
    // console.log(this.miForm.value);
    this.miForm.markAllAsTouched();
    // this.miForm.reset();
  }

  
}
