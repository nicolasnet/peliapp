import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';

@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrls: ['./detallepelicula.component.css']
})
export class DetallepeliculaComponent implements OnInit {

  @Input() peliculaParaMostrar: Pelicula;

  constructor() {
    // this.peliculaParaMostrar = new Pelicula()
    // this.peliculaParaMostrar.nombre = "PRUEBA";
    // this.peliculaParaMostrar.tipo = "terror";
    // this.peliculaParaMostrar.fechaDeEstreno = new Date();
    // this.peliculaParaMostrar.id = 5;
    
   }

  ngOnInit(): void {
  }

}
