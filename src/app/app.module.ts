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
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormularioPeliculaComponent } from './componentes/formulario-pelicula/formulario-pelicula.component';
import { ListadoActoresComponent } from './componentes/listado-actores/listado-actores.component';
import { CrearPeliculaComponent } from './componentes/crear-pelicula/crear-pelicula.component';
import { ActorpeliculaComponent } from './pages/actorpelicula/actorpelicula.component';
import { DetallepaisComponent } from './pages/detallepais/detallepais.component';
import { DetalleactorComponent } from './pages/detalleactor/detalleactor.component';
import { TablapeliculasActorComponent } from './pages/tablapeliculas-actor/tablapeliculas-actor.component';
import { ErrorComponent } from './componentes/error/error.component'


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
    FormularioComponent,
    FormularioPeliculaComponent,
    ListadoActoresComponent,
    CrearPeliculaComponent,
    ActorpeliculaComponent,
    DetallepaisComponent,
    DetalleactorComponent,
    TablapeliculasActorComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ServiciopaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
