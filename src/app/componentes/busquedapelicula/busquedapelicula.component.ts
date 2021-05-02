import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-busquedapelicula',
  templateUrl: './busquedapelicula.component.html',
  styleUrls: ['./busquedapelicula.component.css']
})
export class BusquedapeliculaComponent implements OnInit {

  listadoPeliculas: Pelicula[];
  
  peliculaSeleccionada: Pelicula;

  constructor() {
    this.listadoPeliculas = [
      {id: 1, nombre: "La llamada", tipo: "terror", fechaDeEstreno: new Date(), cantidadPublico: 21, fotoDePelicula: "https://i.ytimg.com/vi/KkV0wGih5M0/hqdefault.jpg"},
      {id: 2, nombre: "Fuerza Trueno", tipo: "comedia", fechaDeEstreno: new Date(), cantidadPublico: 21, fotoDePelicula: "https://indiehoy.com/wp-content/uploads/2021/04/fuerza-trueno.jpg"},
      {id: 3, nombre: "PD: Te amo.", tipo: "Amor", fechaDeEstreno: new Date(), cantidadPublico: 21, fotoDePelicula: "https://es.web.img3.acsta.net/pictures/15/11/12/08/41/395091.jpg"}
    ];
   }

  ngOnInit(): void {
  }

  CargarPeliculaSeleccionada(pelicula: Pelicula){
    this.peliculaSeleccionada = pelicula;
    console.log(pelicula);
  }



  CargarNuevaPelicula(pelicula: Pelicula){
    this.listadoPeliculas.push(pelicula);

  }

}
