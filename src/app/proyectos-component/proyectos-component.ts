import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { empleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-proyectos-component',
  styleUrl: './proyectos-component.css',
  templateUrl: './proyectos-component.html',
})
export class ProyectosComponent implements OnInit {
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;

  constructor(private router: Router, private empleadosService: empleadosService ){}

  ngOnInit(){

  }

  volverHome(){
    this.router.navigate(['']);
  }

  agregar_empleado() {
    let mi_empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.empleados.push(mi_empleado);
    this.empleadosService.agregar_empleado_servicio(mi_empleado);
    // Limpiar los campos del formulario
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;

    this.volverHome();

    /*this.miServicio.muestra_mensaje("Nombre del empleado: " + mi_empleado.nombre + " " + mi_empleado.apellido);*/
  }
}
