import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import {Usuario} from '../Interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private Auth: AngularFireAuth,private router :Router) { }
   

    Entrar(usuario:Usuario){ 
      return this.Auth.auth.signInWithEmailAndPassword(usuario.email,usuario.password)
      .then(result=>{
         if(result){
          alert('Usuario Registrado');
         this.router.navigate(['inicio']);
         }
      }).catch(error =>{
        alert(error);
      })
     }

     async salir(){
       await this.Auth.auth.signOut();
       this.router.navigate(['']);
     }

}
