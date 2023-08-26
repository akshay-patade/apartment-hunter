import { Component, OnInit } from '@angular/core';


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


  constructor() {

    this.personName = '';
    this.personEmail = '';
    this.personMessage = '';

  }

}
