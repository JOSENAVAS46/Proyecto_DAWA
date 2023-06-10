import { Component } from '@angular/core';
import { Factura } from 'src/app/models/Factura';
import { Cliente } from 'src/app/models/Cliente';
import { Producto } from 'src/app/models/Producto';
import { ItemFactura } from 'src/app/models/ItemFactura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent {
  factura: Factura | null = null;
  nombreCliente: string = '';
  productoSeleccionado: Producto | null = null;
  cantidad: number = 0;
  lstProductos: Producto[] = [
    {
      idProducto: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      categoria: {
        idCategoria: 1,
        nombre: 'Categoría 1',
        descripcion: 'Descripción de la Categoría 1',
      },
      precioUnitario: 10.99,
      stock: 10,
    },
    {
      idProducto: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      categoria: {
        idCategoria: 2,
        nombre: 'Categoría 2',
        descripcion: 'Descripción de la Categoría 2',
      },
      precioUnitario: 19.99,
      stock: 5,
    },
    {
      idProducto: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del Producto 3',
      categoria: {
        idCategoria: 3,
        nombre: 'Categoría 3',
        descripcion: 'Descripción de la Categoría 3',
      },
      precioUnitario: 7.99,
      stock: 15,
    },
  ];

  agregarItem(): void {
    if (this.productoSeleccionado && this.cantidad > 0) {
      const item: ItemFactura = new ItemFactura(
        this.factura?.items.length! + 1 || 1,
        this.productoSeleccionado,
        this.cantidad,
        this.productoSeleccionado.precioUnitario
      );

      if (this.factura) {
        this.factura.items.push(item);
      } else {
        this.factura = new Factura(
          1,
          'F-001',
          new Date(),
          new Cliente(1, this.nombreCliente, '', '', '', ''),
          [item],
          item.subtotal
        );
      }

      this.productoSeleccionado = null;
      this.cantidad = 0;
    }
  }

  generarFactura(): void {
    if (this.factura && this.factura.items.length > 0) {
      let total: number = 0;

      this.factura.items.forEach((item) => {
        total += item.subtotal;
      });

      this.factura.montoTotal = total;
    }
  }
}
