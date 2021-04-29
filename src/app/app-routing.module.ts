import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedapeliculaComponent } from './componentes/busquedapelicula/busquedapelicula.component';
import { AltaactorComponent } from './pages/altaactor/altaactor.component';
import { FormularioComponent } from './pages/formulario/formulario.component';

const routes: Routes = [
  
  { path: 'busqueda', component: BusquedapeliculaComponent},
  { path: '', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
