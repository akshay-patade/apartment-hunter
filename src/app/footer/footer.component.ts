import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})


export class FooterComponent{

  personName: string;
  personEmail: string;
  personMessage: string;
  submitted = false;
  token: string | undefined;


  constructor() {

    this.personName = '';
    this.personEmail = '';
    this.personMessage = '';
  }

  public sendForm(form: NgForm): void{

    if(form.invalid) {

      for(const formControl of Object.keys(form.controls))
        form.controls[formControl].markAsTouched();

      return;
    }

    alert("Message sent successfully");

    console.log(`Token [${this.token}] generated`);
}

}

