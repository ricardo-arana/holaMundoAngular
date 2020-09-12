import { Component } from '@angular/core';

@Component({
    selector: 'app-saludar',
    templateUrl: './saludar.component.html',
    styleUrls: ['./saludar.component.css']
})
export class SaludarComponent {
    nombre: string = 'Ricardo';

    cambiarNombre() {
        this.nombre = this.nombre === 'Ricardo' ? 'Martin' : 'Ricardo';
    }
}
