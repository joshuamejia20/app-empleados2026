import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable({
  providedIn: 'root'
})
export class DataServices {
  url = 'https://misempleados2026-default-rtdb.firebaseio.com/';
  constructor(private httpClient: HttpClient) {}

  guardar_empleados(empleados: Empleado[]) {
   this.httpClient.put(this.url + 'datos.json', empleados).subscribe({
      next: (response) => console.log("Se han guardado los empleados"),
      error: (error) => console.log('Error ' + error.error)
   })
  }

  cargar_empleados() {
    return this.httpClient.get(this.url + '/datos.json');
    //return this.httpClient.get<{ [key: string]: Empleado }>(this.url + 'datos.json');
  }

  actualizar_empleado(indice: number, empleado: Empleado){
    //return this.httpClient.put(this.url + "/datos/"+indice+".json", empleado);
    this.httpClient.put(this.url + "/datos/"+indice+".json", empleado).subscribe({
     next: (response) =>console.log("Se ha actualizado el empleado " + response),
     error: (error)=>console.log("Error: " + error)
  })
  }
}
