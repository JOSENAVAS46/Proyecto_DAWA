import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
@Component({
  selector: 'app-listar-proveedor',
  templateUrl: './listar-proveedor.component.html',
  styleUrls: ['./listar-proveedor.component.css']
})
export class ListarProveedorComponent {
  lstProveedores: Proveedor[] = [
    { idProveedor: 1, codigo: 'PROV001', nombre: 'Proveedor 1', direccion: 'Dirección 1', telefono: '123456789', correoElectronico: 'proveedor1@example.com' },
    { idProveedor: 2, codigo: 'PROV002', nombre: 'Proveedor 2', direccion: 'Dirección 2', telefono: '987654321', correoElectronico: 'proveedor2@example.com' },
    { idProveedor: 3, codigo: 'PROV003', nombre: 'Proveedor 3', direccion: 'Dirección 3', telefono: '456789123', correoElectronico: 'proveedor3@example.com' }
  ];

}
