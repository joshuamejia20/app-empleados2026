import { Component } from '@angular/core';
import { Empleado } from './empleado.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmpleadoHijoC } from './empleado-hijo-c/empleado-hijo-c';

@Component({
  imports: [FormsModule, CommonModule, EmpleadoHijoC],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  titulo = "Listado de empleados";
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: Empleado[] = [
    new Empleado("Josue", "Mejia", "Presidente", 5000),
    new Empleado("Esdras", "Palacios", "Gerente", 4000),
    new Empleado("Jorge", "Menjivar", "Supervisor", 3000),
    new Empleado("Javier", "Contreras", "Empleado", 2000),
  ];

  agregar_empleado() {
    let mi_empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    this.empleados.push(mi_empleado);
    // Limpiar los campos del formulario
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;
  }
}
