import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
@Component({
  selector: 'app-mantenimiento-cliente',
  templateUrl: './mantenimiento-cliente.component.html',
  styleUrls: ['./mantenimiento-cliente.component.css']
})
export class MantenimientoClienteComponent {
  cliente: Cliente | null = null;
  cedulaBusqueda: string = '';

  constructor(private clienteService: ClienteService) { }

  async buscarCliente(): Promise<void> {
    try {
      this.cliente = await this.clienteService.getClienteByCedula(this.cedulaBusqueda);
    } catch (error) {
      console.error('Error al obtener cliente:', error);
    }
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
