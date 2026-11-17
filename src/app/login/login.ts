import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }
}
