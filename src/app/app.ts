import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from './empleado-hijo-c/empleado-hijo-c';
import { ServicioEmpleado } from './servicio-empleado';
import { empleadosService } from './empleados.service';

@Component({
  imports: [FormsModule, CommonModule, EmpleadoHijoC],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  titulo = "Listado de empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: Empleado[];


  constructor(private miServicio: ServicioEmpleado, private empleadoService: empleadosService) {
    //this.empleados = this.empleadoService.empleados;
  }

  ngOnInit() {
    this.empleados = this.empleadoService.empleados;
  }


  agregar_empleado() {
    let mi_empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.empleados.push(mi_empleado);
    this.empleadoService.agregar_empleado_servicio(mi_empleado);
    // Limpiar los campos del formulario
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;

    this.miServicio.muestra_mensaje("Nombre del empleado: " + mi_empleado.nombre + " " + mi_empleado.apellido);
  }
}
