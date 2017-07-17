import { Directive, forwardRef, Attribute, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, Validators } from '@angular/forms';

@Directive({
    selector: '[minValue][formControlName],[minValue][formControl],[minValue][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => MinValue), multi: true }
    ]
})
export class MinValue implements Validators {
    constructor( @Attribute('minValue') public minValue: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        let v = Number(c.value);
        let min = Number(this.minValue);
        // value not equal
        if (v < min) return {
            minValue: true
        }
        return null;
    }
}