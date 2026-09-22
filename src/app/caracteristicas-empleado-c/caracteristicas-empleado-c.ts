import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-caracteristicas-empleado-c',
  styleUrl: './caracteristicas-empleado-c.css',
  templateUrl: './caracteristicas-empleado-c.html',
})
export class CaracteristicasEmpleadoC {
  @Output() newItemEvent = new EventEmitter<string>();
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  agregar_caracteristica(value: string){
    this.caracteristicasEmpleados.emit(value);
  }
}
