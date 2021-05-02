import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-actorpelicula',
  templateUrl: './actorpelicula.component.html',
  styleUrls: ['./actorpelicula.component.css']
})
export class ActorpeliculaComponent implements OnInit {

  
  actorSeleccionado: Actor;

  constructor() { }

  ngOnInit(): void {
  }
  
  CargarActorSeleccionado(actor: Actor){
    this.actorSeleccionado = actor;
    console.log(actor);
  }
}
