import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
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
    email:['',[Validators.required, Validators.pattern(this.vs.emailPattern) ], [this.emailValidator]],
    userName:['',[Validators.required, this.vs.noPuedeSerGus]],
    password:['',[Validators.required, Validators.minLength(6)]],
    password2:['',[Validators.required]],
  },
  {
    Validators:[this.vs.camposIguales('password', 'password2')]
  })

  // el ? indica que puede ser opcional este getter se ejecuta siempre que angular lo detecte 
  get emailErrorMsg ():string{
    const  errors = this.miForm.get('email')?.errors;
    if (errors?.required) {
      return 'El email es requerido';
    } else if (errors?.pattern){
      return 'El formato no es valido';
    }else if (errors?.emailTomado){
      return 'El email ya existe';
    }
    
    return '';
  }

  constructor(private fb : FormBuilder, private vs:ValidatorService, private emailValidator : EmailValidatorService) { }

  ngOnInit(): void {
    // para no tener problemas con la validación pasamos un valor al nombre
    this.miForm.reset({
      nombre:'Gustavo Diaz',
      email:'test1@test.com',
      userName:'Franco',
      password:'123456',
      password2:'123456',
    })
  }

  campoNoValido(campo:string){
  return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched;
  }
  // emailRequired(){
  // return this.miForm.get('email')?.errors?.required && this.miForm.get('email')?.touched;
  // }
  // emailFormato(){
  // return this.miForm.get('email')?.errors?.pattern && this.miForm.get('email')?.touched;
  // }
  // emailtomado(){
  // return this.miForm.get('email')?.errors?.emailTomado && this.miForm.get('email')?.touched;
  // }


  submitFormulario(){
    // console.log(this.miForm.value);
    this.miForm.markAllAsTouched();
    // this.miForm.reset();
  }

  
}
