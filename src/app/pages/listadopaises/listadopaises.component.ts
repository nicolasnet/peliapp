import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ServiciopaisesService } from 'src/app/servicios/serviciopaises.service';

@Component({
  selector: 'app-listadopaises',
  templateUrl: './listadopaises.component.html',
  styleUrls: ['./listadopaises.component.css']
})
export class ListadopaisesComponent implements OnInit {

  listadoPaises:any;
  cantidadPaises: number;
  @Output() eventPaisSeleccionado: EventEmitter<any> = new EventEmitter<any>();

  constructor(private miServicio: ServiciopaisesService) {
    this.miServicio.getTodosLosPaises().subscribe(resultado => {
      this.listadoPaises = resultado;
      this.cantidadPaises = this.listadoPaises.length;
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
   }

  ngOnInit(): void {
  }

  seleccionPais(pais:object){
    // this.traerDatos();
    this.eventPaisSeleccionado.emit(pais);
  }


  traerDatos(){
    
    // console.log(this.miServicio.getPaisActual());
    // this.miServicio.setPaisActual("China");
    // console.log(this.miServicio.getPaisActual());
    
    this.miServicio.getTodosLosPaises().subscribe(resultado => {
      
    }, error  =>{
      console.log('hubo un error: '+ error);
      
    });
    
  }



}
