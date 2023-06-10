import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
@Component({
  selector: 'app-mantenimiento-cliente',
  templateUrl: './mantenimiento-cliente.component.html',
  styleUrls: ['./mantenimiento-cliente.component.css']
})
export class MantenimientoClienteComponent {
  cliente: Cliente | null = null;
  cedulaBusqueda: string = '';

  buscarCliente(): void {

    this.cliente = {
      idCliente: 1,
      cedula: '123456789',
      nombre: 'Cliente Ejemplo',
      direccion: 'Dirección Ejemplo',
      telefono: '987654321',
      correoElectronico: 'cliente@example.com',
    };
  }

  limpiarBusqueda(): void {
    this.cliente = null;
    this.cedulaBusqueda = '';
  }

  editarCliente(): void {

  }

  eliminarCliente(): void {

  }
}
