import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaClientesComponent } from './clientes/tabla-clientes/tabla-clientes.component';

const routes: Routes = [
  {path: '', component: TablaClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
