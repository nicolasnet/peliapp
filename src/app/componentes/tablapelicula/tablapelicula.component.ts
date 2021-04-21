import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-tablapelicula',
  templateUrl: './tablapelicula.component.html',
  styleUrls: ['./tablapelicula.component.css']
})
export class TablapeliculaComponent implements OnInit {

  @Input() listadoTabla: Pelicula[];
  @Output() eventPeliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  SeSeleccionoPelicula(pelicula: Pelicula){
    console.info('pelicula'+ pelicula);
    this.eventPeliculaSeleccionada.emit(pelicula);

  }

}
