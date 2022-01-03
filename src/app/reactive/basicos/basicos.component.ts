import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // miForm: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX'),
  //   precio: new FormControl(1000),
  //   existencias: new FormControl(5),
    
  // })
  ngOnInit(): void {
      // si necesitamos definir valores al formulario.
      // y queremos que sean definidos en el pricipio enviaremos el objeto.

      this.miForm.setValue({
        nombre:'RTX',
        precio: 1600,
        existencias: 10
      })

  }

  // vamos a utilizar el tipo formBuilder no9s facilita utilizar formularios complejos

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.min(0), Validators.required]],
    existencias: [, [Validators.min(0), Validators.required]],
  })
  constructor( private fb : FormBuilder) { }

  CampoNoEsValido(campo:string){

    return this.miForm.controls[campo].errors 
           && this.miForm.controls[campo].touched
  }

  guardar(){
    if (this.miForm.invalid) {
      return this.miForm.markAllAsTouched();
    }
    this.miForm.reset();
  }
  
}
