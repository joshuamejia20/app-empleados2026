import { Injectable, Service } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleado } from './servicio-empleado';
import { DataServices } from './data.services';

@Injectable({providedIn: 'root'})
export class empleadosService {
 /*empleados: Empleado[] = [
    new Empleado("Josue", "Mejia", "Presidente", 5000),
    new Empleado("Esdras", "Palacios", "Gerente", 4000),
    new Empleado("Jorge", "Menjivar", "Supervisor", 3000),
    new Empleado("Javier", "Contreras", "Empleado", 2000),
  ];*/
  empleados: Empleado[]=[];

  constructor(private servicioMensaje: ServicioEmpleado, private dataService: DataServices) {}

  agregar_empleado_servicio(empleado: Empleado) {
    this.servicioMensaje.muestra_mensaje(
      "nombre:" + empleado.nombre + " Apellido: " + empleado.apellido + " Cargo: " + empleado.cargo + " Salario: " + empleado.salario
    );
    this.empleados.push(empleado);
    this.dataService.guardar_empleados(this.empleados);
  }

  encontrar_empleado(indice:number){
    let empleado : Empleado = this.empleados[indice];
    return empleado;
  }

  actualizar_empleado(indice: number, empleado: Empleado){
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  eliminar_empleado(indice: number){
    this.empleados.splice(indice, 1);
  }

  obtener_empleados(){
    return this.dataService.cargar_empleados();
    //nos devuelve un observable, permite operaciones asincronas(2do plano) - actualiza sin hacer un select
  }

  set_empleados(misEmpleados:Empleado[]){
    this.empleados = misEmpleados;
  }

}
