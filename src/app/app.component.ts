import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HolaMundo';
  nombres = ['Ricardo', 'Martin'];
  nombre: string;
  mostrar: boolean;
  indice = 0;
  masmenos = 'más';
  tareas: string[] = [];
  @ViewChild('tarea') tarea: ElementRef;

  constructor() {
    this.mostrar = false;
    this.nombre = this.nombres[0];
  }

  cambiarNombre() {
    this.indice = this.indice === 0 ? 1 : 0;
    this.nombre =this.nombres[this.indice];
  }

  verMas() {
    this.mostrar = !this.mostrar;
    this.masmenos = this.mostrar ? 'menos' : 'más';
  }

  agregar(tarea: string) {

    console.log('Se agrego el elemento: ' + tarea);
    this.tareas.push(tarea);
    console.log(this.tareas);
    this.tarea.nativeElement.value = '';
  }
}
