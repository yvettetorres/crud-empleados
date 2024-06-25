import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { AlumnosComponent } from './componentes/alumnos/alumnos.component';
import { ListaEmpleadosComponent } from './componentes/lista-empleados/lista-empleados.component';
import { DetalleEmpleadosComponent } from './componentes/detalle-empleados/detalle-empleados.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'alumnos',component:AlumnosComponent},
  {path:'admin',component:AdministradorComponent},
  {path:'lista-empleado',component:ListaEmpleadosComponent},
  {path:'detalle-empleado',component:DetalleEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
