import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarUsuarioComponent } from './components/listar-usuario/listar-usuario.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarUsuarioComponent,
    AgregarUsuarioComponent,
    EditarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
