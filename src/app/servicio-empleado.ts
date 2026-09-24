import { Service } from '@angular/core';

@Service()
export class ServicioEmpleado {
  muestra_mensaje(mensaje: string){
    alert(mensaje);
  }
}
