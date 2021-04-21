import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedapeliculaComponent } from './componentes/busquedapelicula/busquedapelicula.component';

const routes: Routes = [
  { path: '', component: BienvenidoComponent},
  { path: 'busqueda', component: BusquedapeliculaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
