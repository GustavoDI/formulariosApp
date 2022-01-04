import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

   nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
   emailPattern          : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  noPuedeSerGus (control: FormControl){
    const valor:string = control.value?.trim().toLowerCase();
    // console.log(valor);
    if (valor === 'gustav') {
      // si en la valicación se regresa un objeto se considera como un error
      return {
        noGus: true
      }
    }
    return null;
  }

  camposIguales(campo1:string, campo2:string){
    return (control : AbstractControl ): ValidationErrors | null=> {
      const pass1 = control.get(campo1)?.value;
      const pass2 = control.get(campo2)?.value;
      console.log(pass1, pass2);

      if (pass1 !== pass2) {
        control.get(campo2)?.setErrors({noIguales: true})
        return {noIguales: true}
      }
      return null;
    }
  }


}
