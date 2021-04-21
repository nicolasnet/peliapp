import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedapeliculaComponent } from './componentes/busquedapelicula/busquedapelicula.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './componentes/menu/menu.component';
import { TablapeliculaComponent } from './componentes/tablapelicula/tablapelicula.component';
import { DetallepeliculaComponent } from './componentes/detallepelicula/detallepelicula.component';
import { AltapeliculaComponent } from './componentes/altapelicula/altapelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    BusquedapeliculaComponent,
    MenuComponent,
    TablapeliculaComponent,
    DetallepeliculaComponent,
    AltapeliculaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
