import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';

@Component({
  selector: 'app-mantenimiento-proveedor',
  templateUrl: './mantenimiento-proveedor.component.html',
  styleUrls: ['./mantenimiento-proveedor.component.css']
})
export class MantenimientoProveedorComponent {
  proveedor: Proveedor | null = null;
  codigoBusqueda: string = '';

  buscarProveedor(): void {
    this.proveedor = {
      idProveedor: 1,
      codigo: 'PROV001',
      nombre: 'Proveedor Ejemplo',
      direccion: 'Dirección Ejemplo',
      telefono: '987654321',
      correoElectronico: 'proveedor@example.com',
    };
  }

  limpiarBusqueda(): void {
    this.proveedor = null;
    this.codigoBusqueda = '';
  }

  editarProveedor(): void {
    // Aquí puedes agregar la lógica para editar el proveedor
    // utilizando this.proveedor para acceder a los valores del proveedor actual
    // Por ejemplo:
    // if (this.proveedor) {
    //   console.log('Editar proveedor:', this.proveedor);
    // }
  }

  eliminarProveedor(): void {
    // Aquí puedes agregar la lógica para eliminar el proveedor
    // utilizando this.proveedor para acceder a los valores del proveedor actual
    // Por ejemplo:
    // if (this.proveedor) {
    //   console.log('Eliminar proveedor:', this.proveedor);
    // }
  }

}
