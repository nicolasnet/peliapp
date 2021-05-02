import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { FireActoresService } from 'src/app/servicios/fire-actores.service';

@Component({
  selector: 'app-listado-actores',
  templateUrl: './listado-actores.component.html',
  styleUrls: ['./listado-actores.component.css']
})
export class ListadoActoresComponent implements OnInit {

  @Input() peliculaParaMostrar: Pelicula;
  listadoActores:any;
  actoresDePeliSeleccionada: any;
  cantidadActores: number;
  @Output() eventActorSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private miServicio: FireActoresService) {
    this.miServicio.getAll().subscribe(resultado => {
      this.listadoActores = resultado;
      this.cantidadActores = this.listadoActores.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

  ngOnInit(): void {
  }

  seleccionActor(actor:object){
    this.eventActorSeleccionado.emit(actor);
  }

  actoresDePeliParaMostrar(){
    if(this.peliculaParaMostrar){
      this.actoresDePeliSeleccionada = this.peliculaParaMostrar.actores;
      return true;
    }
  }

}
