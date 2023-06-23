import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent {
  lstCategorias: Categoria[] = [
    {
      idCategoria: 1,
      nombre: 'Categoría 1',
      descripcion: 'Descripción de la Categoría 1',
    },
    {
      idCategoria: 2,
      nombre: 'Categoría 2',
      descripcion: 'Descripción de la Categoría 2',
    },
    {
      idCategoria: 3,
      nombre: 'Categoría 3',
      descripcion: 'Descripción de la Categoría 3',
    },
    {
      idCategoria: 4,
      nombre: 'Categoría 4',
      descripcion: 'Descripción de la Categoría 4',
    },
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
    {
      idProducto: 4,
      nombre: 'Producto 4',
      descripcion: 'Descripción del Producto 4',
      categoria: this.lstCategorias[1],
      precioUnitario: 10,
      stock: 51,
    },
  ];

  productosFiltrados: Producto[] = [];
  terminoBusqueda: string = '';
  categoriaFiltro: string = '';

  filtrarProductos(): void {
    this.productosFiltrados = this.lstProductos.filter((producto: Producto) => {
      const cumpleFiltroCategoria =
        this.categoriaFiltro === '' ||
        producto.categoria.nombre
          .toLowerCase()
          .includes(this.categoriaFiltro.toLowerCase());
      const cumpleTerminoBusqueda =
        this.terminoBusqueda === '' ||
        producto.nombre
          .toLowerCase()
          .includes(this.terminoBusqueda.toLowerCase());
      return cumpleFiltroCategoria && cumpleTerminoBusqueda;
    });
  }
}
