import { Component } from '@angular/core';
import { OperacionesService } from './providers/operaciones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'HolaMundo';
  nombre: string;

  constructor(private operacionesService: OperacionesService) {
    console.log(this.operacionesService.sumar(3, 5));
    console.log('Obteniendo nombre desde app com ' + this.operacionesService.obtenerNomber());
    this.obtenerNombre();
  }

  obtenerNombre() {
    this.nombre = this.operacionesService.obtenerNomber();
  }

}
