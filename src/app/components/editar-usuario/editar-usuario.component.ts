import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
})
export class EditarUsuarioComponent implements OnInit {
  usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.editar();
  }

  editar() {
    let id = JSON.parse(localStorage.getItem('id') as string);

    this.usuarioService.getUsuarioId(id).subscribe(
      (data) => {
        this.usuario = data;
        console.log('Usuario Data:');
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  actualizar(usuario: Usuario) {
    this.usuarioService.putUsuario(usuario).subscribe((data) => {
      this.usuario = data;
      this.router.navigate(['usuarios']);
    });
  }

  cancelar() {
    this.router.navigate(['usuarios']);
  }

}
