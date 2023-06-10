import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loggedIn = false;
  usuarioActual: Usuario = new Usuario('', '', '', '', '');

  login(usuario: Usuario) {
    this.loggedIn = true;
    this.usuarioActual = usuario;
  }

  logout() {
    this.loggedIn = false;
    this.usuarioActual = new Usuario('', '', '', '', '');
    location.reload();
  }


}
