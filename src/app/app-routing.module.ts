import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedapeliculaComponent } from './componentes/busquedapelicula/busquedapelicula.component';
import { ErrorComponent } from './componentes/error/error.component';
import { FormularioPeliculaComponent } from './componentes/formulario-pelicula/formulario-pelicula.component';
import { ActorpeliculaComponent } from './pages/actorpelicula/actorpelicula.component';
import { AltaactorComponent } from './pages/altaactor/altaactor.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  
  { path: 'busqueda', component: BusquedapeliculaComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'altapelicula', component: FormularioPeliculaComponent},
  { path: 'actorpelicula', component: ActorpeliculaComponent},
  { path: 'bienvenido', component: BienvenidoComponent},
  { path: '', component: BienvenidoComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
