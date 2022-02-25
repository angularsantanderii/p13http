import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';

const routes: Routes = [
  {path: '', component: TablaClientesComponent},
  {path: 'crear-cliente', component: CrearClienteComponent},
  {path: 'editar-cliente/:_id', component: EditarClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
