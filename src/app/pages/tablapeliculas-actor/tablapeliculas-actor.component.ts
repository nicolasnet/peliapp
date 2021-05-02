import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirePeliculasService } from 'src/app/servicios/fire-peliculas.service';

@Component({
  selector: 'app-tablapeliculas-actor',
  templateUrl: './tablapeliculas-actor.component.html',
  styleUrls: ['./tablapeliculas-actor.component.css']
})
export class TablapeliculasActorComponent implements OnInit {

 
  @Input() listadoTabla: Pelicula[];
  @Input() actorParaMostrar: Actor;
  @Output() eventPeliculaSeleccionada: EventEmitter<any> = new EventEmitter<any>();
  peliculasDelActor: Array<Pelicula>;
  listaPeliculas: any;
  

  constructor(private peliculaService: FirePeliculasService) {
   
    this.peliculaService.getAll().subscribe(peliculas =>{
      
      this.listaPeliculas=peliculas;
    })
  }

  ngOnInit(): void {
  }

  pelisDelActor(){
    if(this.actorParaMostrar){
      console.log("entra en IF");
      this.peliculasDelActor = new Array<Pelicula>();
      for (let index = 0; index < this.listaPeliculas.length; index++) {
        const element = this.listaPeliculas[index];
        for (let index = 0; index < element.actores.length; index++) {
          const actoresPeli = element.actores[index];

          if(actoresPeli.nombre == this.actorParaMostrar.nombre && actoresPeli.apellido==this.actorParaMostrar.apellido){
            this.peliculasDelActor.push(element);
          }
        }        
      }
      return true;
    }


  }
  SeSeleccionoPelicula(pelicula: Pelicula){
    console.info('pelicula'+ pelicula);
    this.eventPeliculaSeleccionada.emit(pelicula);

  }

}
