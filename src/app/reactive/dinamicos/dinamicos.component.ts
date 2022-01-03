import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)] ],
    favoritos: this.fb.array([
      ['Metal Gear'],['Dead Stranding'],
    ], Validators.required)
  })

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr(){
    // return this.miForm.controls.favoritos
    return this.miForm.get('favoritos') as FormArray;
  }

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  CampoNoEsValido(campo:string){
    return this.miForm.controls[campo].errors 
    && this.miForm.controls[campo].touched;
  }

  agregarFavorito(){
    if (this.nuevoFavorito.invalid) {
      return;
    }
    // this.favoritosArr.push(new FormControl( this.nuevoFavorito.value , Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    // Borrando los campos
    this.nuevoFavorito.reset();
  }
  
  guardar(){
    if (this.miForm.invalid) {
       this.miForm.markAllAsTouched();
       return;
    }
    // this.miForm.reset();
    console.log(this.miForm.value);
    
  }
// tener siempre en consideración que para eliminar un elemento debemos siempre pero siempre enviar el ID que se quiere eliminar
  borrar(i:number){
    this.favoritosArr.removeAt(i);
  }

}
