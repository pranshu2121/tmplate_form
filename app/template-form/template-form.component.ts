import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
@ViewChild('myForm') form?: NgForm;
defaultCountry='india';

  OnSubmit(){
    console.log(this.form);
  }
}
