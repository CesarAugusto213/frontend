import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css'],
})
export class AgregarUsuarioComponent implements OnInit {
  usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  guardar(usuario:Usuario) {
    this.usuarioService.postUsuario(usuario).subscribe(
      data => {
        this.router.navigate(['usuarios']);
      }
    );
  }

  cancelar(){
    this.router.navigate(['usuarios']);
  }

}
