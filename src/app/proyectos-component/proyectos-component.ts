import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-proyectos-component',
  styleUrl: './proyectos-component.css',
  templateUrl: './proyectos-component.html',
})
export class ProyectosComponent {

  constructor(private router: Router){}

  volverHome(){
    this.router.navigate(['']);
  }
}
