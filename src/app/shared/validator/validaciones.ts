import { FormControl } from "@angular/forms";


/**De esta forma se puede utilizar para cuando queremos realizar validaciones simples las cuales
 * solo estaran presentes en  un formulario  en caso contrario si queremos utilizar las validaciones 
 * de manera general en toda la aplicación deberiamos utilizar en un servicio.
 * 
 */
export const nombreApellidoPattern : string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern          : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


// esto se puede transformar en un método en dentro de un servicio.
export const noPuedeSerGus = (control: FormControl) =>{
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