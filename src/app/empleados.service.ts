import { Injectable, Service } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleado } from './servicio-empleado';

@Injectable({providedIn: 'root'})
export class empleadosService {
  empleados: Empleado[] = [
    new Empleado("Josue", "Mejia", "Presidente", 5000),
    new Empleado("Esdras", "Palacios", "Gerente", 4000),
    new Empleado("Jorge", "Menjivar", "Supervisor", 3000),
    new Empleado("Javier", "Contreras", "Empleado", 2000),
  ];

  constructor(private servicioMensaje: ServicioEmpleado) {}

  agregar_empleado_servicio(empleado: Empleado) {
    this.servicioMensaje.muestra_mensaje(
      "nombre:" + empleado.nombre + " Apellido: " + empleado.apellido + " Cargo: " + empleado.cargo + " Salario: " + empleado.salario
    );
    this.empleados.push(empleado);
  }

}
