import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tareas: string[] = [];
  @ViewChild('tarea') tarea: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  agregar(tarea: string) {

    console.log('Se agrego el elemento: ' + tarea);
    this.tareas.push(tarea);
    console.log(this.tareas);
    this.tarea.nativeElement.value = '';
  }
}
