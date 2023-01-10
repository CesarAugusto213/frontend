import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css'],
})
export class ListarUsuarioComponent implements OnInit {
  usuarios?: Usuario[];

  constructor(private router: Router, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.usuarioService.getUsuarios().subscribe(
      data => {
        this.usuarios = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  nuevo() {
    this.router.navigate(['nuevoUsuario']);
  }

  editar(usuario: Usuario) {
    localStorage.setItem("id", usuario.id_user.toString());
    this.router.navigate(['editarUsuario']);
  }

  //Revisar
  eliminar(usuario: Usuario){
    this.usuarioService.deleteUsuario(usuario).subscribe(
      data => {
        this.usuarios = this.usuarios!.filter(u => u !== usuario);
      }
    );
  }

}
