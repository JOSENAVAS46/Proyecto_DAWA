import { Component } from '@angular/core';
import { Proveedor } from 'src/app/models/Proveedor';
@Component({
  selector: 'app-form-proveedor',
  templateUrl: './form-proveedor.component.html',
  styleUrls: ['./form-proveedor.component.css'],
})
export class FormProveedorComponent {
  proveedor: Proveedor = new Proveedor(0,"", '', '', '', '');

  guardarProveedor() {
    // Lógica para guardar el proveedor en la base de datos o realizar alguna acción
    console.log('Proveedor guardado:', this.proveedor);
  }
}
