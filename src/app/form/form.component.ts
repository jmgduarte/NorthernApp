import { Component, OnInit } from '@angular/core';
import { User } from '../Models/User';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  paragraph = "Prepare for your career with a Project Management, Web-Development, Graphic design, or Digital Marketing Intership at Northern.";
  emailAddressLeyend = "Your Email Address *";
  interestLeyend = "Your Interests";
  model = new User("","");
  submitted = false;
  interests = ["Project Management","Web-Development","Graphic Design","Digital Marketing"];
  buttonActivated = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.buttonActivated = false;
    const intervalId = setInterval(()=>{
      this.submitted = true;
      clearInterval(intervalId);  
    },2000);
  }
}
