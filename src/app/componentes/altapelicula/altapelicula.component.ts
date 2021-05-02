import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-altapelicula',
  templateUrl: './altapelicula.component.html',
  styleUrls: ['./altapelicula.component.css']
})
export class AltapeliculaComponent implements OnInit {

  peliculaNueva: Pelicula;
  @Output() eventoCreacionNuevaPelicula: EventEmitter<any> = new EventEmitter<any>();

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  GuardaNuevaPelicula(){
    this.eventoCreacionNuevaPelicula.emit(this.peliculaNueva);
    console.log(this.peliculaNueva);
    this.peliculaNueva = null;
  }

  HacerNuevaPelicula(){

    this.ruta.navigate(['altapelicula']);
    // this.peliculaNueva = new Pelicula;
  }

}
