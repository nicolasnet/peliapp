import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { FirePeliculasService } from 'src/app/servicios/fire-peliculas.service';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

 
  @Input() actorParaMostrar;
  @Output() eventNuevoActor: EventEmitter<any> = new EventEmitter<any>();
  public forma: FormGroup;
  listaPeliculas: any
  

  constructor(private fb: FormBuilder, private peliculaService: FirePeliculasService, private router: Router) {
   
    this.peliculaService.getAll().subscribe(peliculas =>{
      
      this.listaPeliculas=peliculas;
    })
  }

  ngOnInit(): void {
    
    this.forma = this.fb.group({
      'nombre': ['', Validators.required],
      'tipo':['', Validators.required],     
      'cantidadPublico': ['', Validators.required],
      'fechaDeEstreno': ['', Validators.required],
      'foto': ['', Validators.required],      
    });
  }


  private async spaceValidator(control: AbstractControl): Promise<object>{
   
    const nombre = <string> control.value;
    const espacios = nombre.includes(' ');

    if(espacios){
      return {
        contieneEspacios: true
      };
    }else{
      return null;
    }
  }


  nuevaPelicula(){    
    const peliculaNueva = new Pelicula;
    peliculaNueva.id= this.listaPeliculas.length+1;
    peliculaNueva.nombre = this.toTitleCase(this.forma.get('nombre').value);
    peliculaNueva.tipo = this.forma.get('tipo').value.toUpperCase();
    peliculaNueva.cantidadPublico = this.forma.get('cantidadPublico').value;
    peliculaNueva.fechaDeEstreno = this.forma.get('fechaDeEstreno').value;
    peliculaNueva.fotoDePelicula = this.forma.get('foto').value;
    peliculaNueva.actores = this.actorParaMostrar;
    console.log(peliculaNueva);
    this.peliculaService.create(peliculaNueva);
    this.router.navigate(['/busqueda']);

  }

  borrado(){
    this.actorParaMostrar="";
  }

  
  toTitleCase(str) {
        return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();   
  }

}
