import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedapeliculaComponent } from './componentes/busquedapelicula/busquedapelicula.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { TablapeliculaComponent } from './componentes/tablapelicula/tablapelicula.component';
import { DetallepeliculaComponent } from './componentes/detallepelicula/detallepelicula.component';
import { AltapeliculaComponent } from './componentes/altapelicula/altapelicula.component';
import { AltaactorComponent } from './pages/altaactor/altaactor.component';
import { ListadopaisesComponent } from './pages/listadopaises/listadopaises.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciopaisesService } from './servicios/serviciopaises.service';
import { FormularioComponent } from './pages/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedapeliculaComponent,
    MenuComponent,
    TablapeliculaComponent,
    DetallepeliculaComponent,
    AltapeliculaComponent,
    AltaactorComponent,
    ListadopaisesComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiciopaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
