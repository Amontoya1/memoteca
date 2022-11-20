import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPensamientoComponent } from './componentes/pensamientos/crear-pensamiento/crear-pensamiento.component';
import { DeletePensamientoComponent } from './componentes/pensamientos/delete-pensamiento/delete-pensamiento.component';
import { EditPensamientoComponent } from './componentes/pensamientos/edit-pensamiento/edit-pensamiento.component';
import { ListarPensamientoComponent } from './componentes/pensamientos/listar-pensamiento/listar-pensamiento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CrearPensamientoComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamientoComponent
  },
  {
    path: 'pensamentos/excluirPensamento/:id',
    component: DeletePensamientoComponent
  },
  {
    path: 'pensamentos/editarPensamento/:id',
    component: EditPensamientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
