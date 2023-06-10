import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Categoria } from 'src/app/models/Categoria';
@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
})
export class ListarProductoComponent {
  lstCategorias: Categoria[] = [
    new Categoria(1, 'Electrónicos', 'Productos electrónicos y dispositivos'),
    new Categoria(2, 'Ropa', 'Ropa y accesorios'),
    new Categoria(3, 'Hogar', 'Productos para el hogar'),
  ];
  lstProductos: Producto[] = [
    {
      idProducto: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción del Producto 1',
      categoria: this.lstCategorias[0],
      precioUnitario: 10.99,
      stock: 10,
    },
    {
      idProducto: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción del Producto 2',
      categoria: this.lstCategorias[1],
      precioUnitario: 19.99,
      stock: 5,
    },
    {
      idProducto: 3,
      nombre: 'Producto 3',
      descripcion: 'Descripción del Producto 3',
      categoria: this.lstCategorias[2],
      precioUnitario: 7.99,
      stock: 15,
    },
  ];
}
