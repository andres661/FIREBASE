import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../../Servicios/usuario.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private servicio:UsuarioService) { }

  ngOnInit() {
  }

  salir(){
    this.servicio.salir();
  }

}
