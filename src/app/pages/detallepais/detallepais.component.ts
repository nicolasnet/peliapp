import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';

@Component({
  selector: 'app-detallepais',
  templateUrl: './detallepais.component.html',
  styleUrls: ['./detallepais.component.css']
})
export class DetallepaisComponent implements OnInit {
  
  @Input() actorParaMostrar: Actor
  constructor() { }

  ngOnInit(): void {
  }

}
