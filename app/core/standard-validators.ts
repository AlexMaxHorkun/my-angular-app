import {ValidatorFn, AbstractControl, Validator, Validators, NG_VALIDATORS} from "@angular/forms";
import {OnChanges, Input, SimpleChanges, Directive, SimpleChange} from "@angular/core";

export function matchesValidator(regex: RegExp): ValidatorFn
{
    return (control: AbstractControl): {[key: string]: any} => {
        const value: string = control.value;
        const isMatching: boolean = regex.test(value);
        return isMatching ? null : {'notMatching': {value}};
    };
}

@Directive({
    selector: '[matches]',
    providers: [{provide: NG_VALIDATORS, useExisting: MatchesValidatorDirective, multi: true}]
})
export class MatchesValidatorDirective implements Validator, OnChanges
{
    @Input() matches: string;

    private valFn = Validators.nullValidator;

    public ngOnChanges(changes: SimpleChanges): void {
        const change: SimpleChange = changes['matches'];
        if (change) {
            let val: RegExp;
            if (!(change.currentValue instanceof RegExp)) {
                val = new RegExp(change.currentValue, 'i');
            } else {
                val = change.currentValue;
            }
            this.valFn = matchesValidator(val);
        } else {
            this.valFn = Validators.nullValidator;
        }
    }

    public validate(control: AbstractControl): {[key: string]: any} {
        return this.valFn(control);
    }
}