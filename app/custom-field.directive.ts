import { Directive } from '@angular/core';
import {FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appCustomField]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CustomFieldDirective, multi: true }
  ]
})
export class CustomFieldDirective implements Validator {
  constructor() { }

  validate(form: FormGroup): ValidationErrors | null {
    if(!form.controls?.['password']|| !form.controls?.['confirmpassword']){

      return null;
    }
    if(form.controls?.['password'].errors && form.controls?.['confirmpassword'].errors){
      return null;
    }
    if(form.controls?.['password'].value !== !form.controls?.['confirmpassword'].value){
      form.controls?.['password'].setErrors({ compareFieldValidator: true });
      form.controls?.['confirmpassword'].setErrors({ compareFieldValidator: true });
      return { compareFieldValidator: true }
    }

    if(form.controls?.['password'].hasError("compareFieldValidator")){
      delete form.controls?.['password'].errors?.["compareFieldValidator"];
      form.controls?.['password'].setErrors(null);
    }

    if(form.controls?.['confirmpassword'].hasError("compareFieldValidator")){
      delete form.controls?.['confirmpassword'].errors?.["compareFieldValidator"];
      form.controls?.['confirmpassword'].setErrors(null);
    }

    return null;
  }
  }
