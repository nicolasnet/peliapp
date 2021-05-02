import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  paisSeleccionado: object;

  constructor() { }

  ngOnInit(): void {
  }

  CargarPaisSeleccionado(pais: object){
    this.paisSeleccionado = pais;
  }


}
