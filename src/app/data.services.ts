import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";

@Injectable({
  providedIn: 'root'
})
export class DataServices {
  url = 'https://misempleados20dkfjsdjflksdjfksdkjfksdljfldsjglñds26-default-rtdb.firebaseio.com/';
  constructor(private httpClient: HttpClient) {}

  guardar_empleados(empleados: Empleado[]) {
   this.httpClient.post(this.url + 'pupusa.json', empleados).subscribe({
      next: (response) => console.log("Se han guardado los empleados"),
      error: (error) => console.log('Error ' + error.error)
   })
  }
}
