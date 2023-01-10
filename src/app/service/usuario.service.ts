import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:8080/api/usuario';

  getUsuarios() {
    return this.http.get<Usuario[]>(this.url);
  }

  getUsuarioId(id: number) {
    return this.http.get<Usuario>(this.url + '/' + id);
  }

  postUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.url, usuario);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.url, usuario);
  }

  deleteUsuario(usuario: Usuario) {
    return this.http.delete(this.url + '/' + usuario.id_user);
  }

}
