import { Component } from '@angular/core';

@Component({
    selector: 'app-saludar',
    template: `
    <h1> hola {{ nombre }}</h1>
    <hr>
    <button (click)="cambiarNombre()" class="btn btn-primary"> Cambiar nombre</button>
    `
})
export class SaludarComponent {
    nombre: string = 'Ricardo';

    cambiarNombre() {
        this.nombre = this.nombre === 'Ricardo' ? 'Martin' : 'Ricardo';
    }
}
