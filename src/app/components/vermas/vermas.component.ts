import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.css']
})
export class VermasComponent implements OnInit {
  mostrar = false;
  masmenos = 'más';
  constructor() { }

  ngOnInit(): void {
  }

  verMas() {
    this.mostrar = !this.mostrar;
    this.masmenos = this.mostrar? 'menos' : 'más';
  }

}
