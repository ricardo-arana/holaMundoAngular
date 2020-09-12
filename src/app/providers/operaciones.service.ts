import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionesService {
  nombre = 'Ricardo';
  constructor() {
    console.log('Soy un servicio');
   }

   sumar(a: number, b: number) {
     return a + b;
   }

   obtenerNomber() {
     return this.nombre;
   }

   grabarNombre(nombre: string) {
     this.nombre = nombre;
   }
}
