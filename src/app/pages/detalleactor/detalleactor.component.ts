import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detalleactor',
  templateUrl: './detalleactor.component.html',
  styleUrls: ['./detalleactor.component.css']
})
export class DetalleactorComponent implements OnInit {

  @Input() actorParaMostrar: Actor
  constructor() { }

  ngOnInit(): void {
  }

  

}
