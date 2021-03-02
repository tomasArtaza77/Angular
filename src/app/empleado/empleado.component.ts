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
  //empresa = "The Ripper";

  /*getEdad(){
    return this.edad;
  }*/

  habilitarBusq = false;
  usuRegistrado = false;
  textoDeRegistro = "No hay nadie registrado.";

  getRegistoUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(event:Event){
    //alert("Usuario registrado.");
    //this.textoDeRegistro = "Usuario registrado satisfactoriamente.";
    //alert(event.target) //identifico el tipo de objeto.
    
    if( (<HTMLInputElement>event.target).value == "SI" ){ //localizo el objeto y encuentro el evento a trabajar.
      this.textoDeRegistro = "Usuario registrado satisfactoriamente.";
    } 
    else{
      this.textoDeRegistro = "No hay nadie registrado.";
    }
  }

  buscaEmpresa(value:String){
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
