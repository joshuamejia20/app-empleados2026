import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Empleado } from '../empleado.model';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-actualiza-component',
  styleUrl: './actualiza-component.css',
  templateUrl: './actualiza-component.html',
})
export class ActualizaComponent implements OnInit {
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: Empleado[];
  indice: number;

  constructor(private router: Router, private empleadosService: empleadosService, private route: ActivatedRoute){}

  ngOnInit(){
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];

    let empleado: Empleado=this.empleadosService.encontrar_empleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
  }

  volverHome(){
    this.router.navigate(['']);
  }

  actualizar_empleado() {
    let mi_empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //this.empleados.push(mi_empleado);
    this.empleadosService.actualizar_empleado(this.indice, mi_empleado);
    // Limpiar los campos del formulario
    this.cuadroNombre = "";
    this.cuadroApellido = "";
    this.cuadroCargo = "";
    this.cuadroSalario = 0;

    this.volverHome();

    /*this.miServicio.muestra_mensaje("Nombre del empleado: " + mi_empleado.nombre + " " + mi_empleado.apellido);*/
  }
}
