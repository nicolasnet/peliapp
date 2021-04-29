import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-altaactor',
  templateUrl: './altaactor.component.html',
  styleUrls: ['./altaactor.component.css']
})
export class AltaactorComponent implements OnInit {

  @Input() paisParaMostrar: object;

  constructor() { }

  ngOnInit(): void {
  }

}
