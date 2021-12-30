import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

/**
 *  para que sea la directiva se debe agregar el decorador
 * Las directivas necesitan un selector, como se va a utilizar
 * La directiva solo se podra utilizar si tienes un customMin y un ngModel
 * Las directivas deben ser incluidas en el módulo
 *  */
@Directive({
    selector: '[customMin][ngModel]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator{
    @Input()minimo!: number;

    constructor(){
        // console.log('Directiva', this.minimo);
        
    }

    validate(control: FormControl){
        const inputValue = control.value;
        console.log(inputValue);

        return (inputValue < this.minimo)?{'custoMin':true}:null;
    }
}