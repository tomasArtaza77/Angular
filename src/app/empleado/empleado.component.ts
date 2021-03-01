import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  
})
export class EmpleadoComponent implements OnInit {

  nombre = "Tomas";
  apellido = "Artaza";
  edad = 22;
  empresa = "The Ripper";

  /*getEdad(){
    return this.edad;
  }*/

  constructor() { }

  ngOnInit(): void {
  }

}
