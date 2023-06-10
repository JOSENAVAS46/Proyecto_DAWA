import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css'],
})
export class ListarClienteComponent {
  lstClientes: Cliente[] = [
    {
      idCliente: 1,
      cedula: 'Cedula 1',
      nombre: 'Cliente 1',
      direccion: 'Dirección 1',
      telefono: '123456789',
      correoElectronico: 'cliente1@example.com',
    },
    {
      idCliente: 2,
      cedula: 'Celuda 2',
      nombre: 'Cliente 2',
      direccion: 'Dirección 2',
      telefono: '987654321',
      correoElectronico: 'cliente2@example.com',
    },
    {
      idCliente: 3,
      cedula: 'Cedula 3',
      nombre: 'Cliente 3',
      direccion: 'Dirección 3',
      telefono: '555555555',
      correoElectronico: 'cliente3@example.com',
    },
  ];
}
