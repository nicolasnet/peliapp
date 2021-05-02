import { Component,Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Actor } from 'src/app/clases/actor';
import { FireActoresService } from 'src/app/servicios/fire-actores.service';


@Component({
  selector: 'app-altaactor',
  templateUrl: './altaactor.component.html',
  styleUrls: ['./altaactor.component.css']
})
export class AltaactorComponent implements OnInit {

  @Input() paisParaMostrar: object;
  @Output() eventNuevoActor: EventEmitter<any> = new EventEmitter<any>();
  public forma: FormGroup;
  listaActores: any;

  constructor(private fb: FormBuilder, private actorService: FireActoresService) {
    // this.actorService.getAll().subscribe(actores =>{
      
    //   this.listaActores=actores;
    // })
  }

  ngOnInit(): void {
    this.forma = this.fb.group({
      'nombre': ['', [Validators.required], this.spaceValidator],
      'apellido':['', Validators.required],     
      'email': ['', [Validators.required, Validators.email]],
      'fechaNacimiento': ['', Validators.required],
      'pais': [''],      
    });
  }


  private async spaceValidator(control: AbstractControl): Promise<object>{
    console.log("entra en spaceControl");
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


  nuevoActor(){
    
    const actorNuevo = new Actor;
    actorNuevo.nombre = this.toTitleCase(this.forma.get('nombre').value.toUpperCase());
    actorNuevo.apellido = this.toTitleCase(this.forma.get('apellido').value.toUpperCase());
    actorNuevo.email = this.forma.get('email').value;
    actorNuevo.fechaNacimiento = this.forma.get('fechaNacimiento').value;
    actorNuevo.pais = this.paisParaMostrar;
    
    this.actorService.create(actorNuevo);    
  }

  toTitleCase(str) {
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();    
}
  

}

