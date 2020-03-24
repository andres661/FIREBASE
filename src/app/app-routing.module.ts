import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './Componentes/index/index.component';
import {InicioComponent} from './Componentes/inicio/inicio.component';
import {GuardsGuard} from './guards/guards.guard';

const routes: Routes = [

  {path: 'inicio' ,component:InicioComponent,canActivate: [GuardsGuard]},
  {path: 'home', component: IndexComponent },
  {path: '**', redirectTo: 'home',pathMatch:'full',canActivate: [GuardsGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
