import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import firebase from 'firebase/compat/app';


@Component({
  imports: [FormsModule, CommonModule, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  ngOnInit(): void{
    firebase.initializeApp({
      apiKey: "AIzaSyBQQWyAg5TA-9SrPVWjXk8sP146dcOKH2I",
      authDomain: "misempleados2026.firebaseapp.com",
    })
  }
}
