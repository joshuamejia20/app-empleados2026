import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { CaracteristicasEmpleadoC } from '../caracteristicas-empleado-c/caracteristicas-empleado-c';

@Component({
  imports: [CaracteristicasEmpleadoC],
  selector: 'app-empleado-hijo-c',
  styleUrl: './empleado-hijo-c.css',
  templateUrl: './empleado-hijo-c.html',
})
export class EmpleadoHijoC {
  @Input() empleadoLista: Empleado;
  @Input() indice: number;

  array_caracteristicas = [""];

  agregar_caracteristica(caracteristica: string){
    this.array_caracteristicas.push(caracteristica);
  }
}
