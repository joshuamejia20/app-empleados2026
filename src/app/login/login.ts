import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(private LoginService: LoginService){}

  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.LoginService.login(email, password);
  }
}
