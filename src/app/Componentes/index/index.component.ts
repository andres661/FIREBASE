import { Component, OnInit } from '@angular/core';
import {Usuario}  from '../../Interface/usuario';
import {UsuarioService} from '../../Servicios/usuario.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})


export class IndexComponent implements OnInit {

  usuario:Usuario = new Usuario();
  constructor(private UsuarioServide:UsuarioService) { }


  ngOnInit() {
  }

  Entrar(form:NgForm){
    this.UsuarioServide.Entrar(form.value);
    this.reset(form);
  }

  reset(form?:NgForm){
      form.reset();
  }

}
