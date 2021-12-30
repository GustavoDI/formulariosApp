import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miForm') miForm! : NgForm;

  initForm = {
    producto:'',
    precio:0,
    existencia:0
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido():boolean{
    // en esta parte hacemos referencia a la clase.
    return this.miForm?.controls.producto?.invalid && this.miForm?.controls.producto?.touched;
  }

  precioValido():boolean{
  return this.miForm?.controls.precio?.touched  && this.miForm?.controls.precio?.value < 0;
  }
  // guardar(miForm:NgForm){
  guardar(){
    console.log(this.miForm);
    this.miForm.resetForm(
      // Dentro del resetForm podemos enviar valores con un objeto.
      {
        precio:0,
        existencia:0
      }
    )
  }

}
