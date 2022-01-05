import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

  constructor(private http: HttpClient) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {

    const email =  control.value;
    // console.log(email);
    
    /**
     *notar que para enviar el validador en este caso seria la query debemos capturar la información
     *del campo que se necesita ,
     para este caso y poder utilizar distintos errores de maneras condicionales y se utilizan operadores
     rxjs en este caso map el map no spermite transformar el valor que el observable emite y regresar lo que yo necesite.
     Se utilizara un delay, el hara que demore un poco mas a modo de muestra de las cosas que necesitamos.
     Si queremos agregar mensajes diferentes para cada error que pueda tener el email.
     */

      return this.http.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        // delay(3000),
        map(resp =>{
          return (resp.length === 0)?null:{emailTomado:true};
        })
      )
  }
}
