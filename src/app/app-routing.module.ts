import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';

const routes: Routes = [
  { path: 'usuarios', component: ListarUsuarioComponent },
  { path: 'nuevoUsuario', component: AgregarUsuarioComponent },
  { path: 'editarUsuario', component: EditarUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
