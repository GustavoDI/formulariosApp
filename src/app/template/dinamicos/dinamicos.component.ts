import { Component, OnInit } from '@angular/core';



interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id:number;
  nombre:string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  nuevoJuego:string = '';

  persona : Persona= {
    nombre:'Gu5t^\/0',
    favoritos: [
      {id:1, nombre:'Metal Gear'},
      {id:2, nombre:'Donkey Kong'},
    ]
    
  }

  guardar(){
    console.log('Posteado');
  }
  eliminar(i:number){
    this.persona.favoritos.splice(i, 1);
  }

  agregarJuego(){
    const nuevoFavorito : Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre:this.nuevoJuego,
    }
    // insertar a personas el nuevo favorito
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }
}
