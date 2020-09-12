import { Component } from '@angular/core';
import { OperacionesService } from 'src/app/providers/operaciones.service';

@Component({
    selector: 'app-saludar',
    templateUrl: './saludar.component.html',
    styleUrls: ['./saludar.component.css']
})
export class SaludarComponent {
    nombre: string = 'Ricardo';

    constructor(private operSer: OperacionesService) {
    
    }

    cambiarNombre() {
        this.nombre = this.nombre === 'Ricardo' ? 'Martin' : 'Ricardo';
        this.operSer.grabarNombre(this.nombre);
        console.log('desde saludar Component: ' + this.operSer.obtenerNomber());
    }
}
