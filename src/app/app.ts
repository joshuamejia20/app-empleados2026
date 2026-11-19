import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';


@Component({
  imports: [FormsModule, CommonModule, RouterOutlet, RouterLinkWithHref],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  constructor(private LoginService: LoginService){}

  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyBQQWyAg5TA-9SrPVWjXk8sP146dcOKH2I",
      authDomain: "misempleados2026.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.LoginService.estaLogueado();
  }

  logout(){
    this.LoginService.logout();
  }
}
