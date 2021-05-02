import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirePeliculasService } from 'src/app/servicios/fire-peliculas.service';

@Component({
  selector: 'app-tablapelicula',
  templateUrl: './tablapelicula.component.html',
  styleUrls: ['./tablapelicula.component.css']
})
export class TablapeliculaComponent implements OnInit {

  @Input() listadoTabla: Pelicula[];
  @Input() actorParaMostrar: Actor;
  @Output() eventPeliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  
  listaPeliculas: any;
  

  constructor(private peliculaService: FirePeliculasService) {
   
    this.peliculaService.getAll().subscribe(peliculas =>{
      
      this.listaPeliculas=peliculas;
    })
  }

  ngOnInit(): void {
  }

  SeSeleccionoPelicula(pelicula: Pelicula){
    console.info('pelicula'+ pelicula);
    this.eventPeliculaSeleccionada.emit(pelicula);

  }

}
