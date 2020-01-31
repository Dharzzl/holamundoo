import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']










  
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
  mostrar = true;

  frase:any={
  mensaje:'Desde entonces algo cambio dentro de lotso :v algo se quebro',
  autor:'Lotso'
  };

  personajes:string[] = ['Lotso','Wody','Buzz','Sfdx','Dharzz'];

}
