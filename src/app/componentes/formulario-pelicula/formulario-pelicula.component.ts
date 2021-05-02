import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  actorSeleccionado: Array<Actor> = new Array<Actor>();

  constructor() { }

  ngOnInit(): void {
  }

  CargarActorSeleccionado(actor: Actor){
    this.actorSeleccionado.push(actor);
  }


}
