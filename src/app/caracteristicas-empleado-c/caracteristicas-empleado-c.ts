import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleado } from '../servicio-empleado';

@Component({
  imports: [],
  selector: 'app-caracteristicas-empleado-c',
  styleUrl: './caracteristicas-empleado-c.css',
  templateUrl: './caracteristicas-empleado-c.html',
})
export class CaracteristicasEmpleadoC {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(
    //private miServicio: ServicioEmpleado
    ) {}

  agregar_caracteristica(value: string){
    //this.miServicio.muestra_mensaje("Caracteristica del empleado: " + value);
    this.caracteristicasEmpleados.emit(value);
  }
}
