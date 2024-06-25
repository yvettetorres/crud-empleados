import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { DetalleEmpleadosComponent } from './componentes/detalle-empleados/detalle-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdministradorComponent,
    AlumnosComponent,
    ListaEmpleadosComponent,
    DetalleEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
