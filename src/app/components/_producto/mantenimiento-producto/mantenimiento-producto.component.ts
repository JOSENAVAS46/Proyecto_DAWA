import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-mantenimiento-producto',
  templateUrl: './mantenimiento-producto.component.html',
  styleUrls: ['./mantenimiento-producto.component.css'],
})
export class MantenimientoProductoComponent {
  producto: Producto | null = null;
  idProducto: number = 0;

  buscarProducto(): void {
    // Simulación de búsqueda de producto por nombre
    // Aquí podrías implementar la lógica real para buscar el producto en tu base de datos o servicio
      this.producto = {
        idProducto: 1,
        nombre: 'Producto Ejemplo',
        descripcion: 'Descripción del Producto Ejemplo',
        categoria: {
          idCategoria: 1,
          nombre: 'Categoría Ejemplo',
          descripcion: 'Descripción de la Categoría Ejemplo',
        },
        precioUnitario: 9.99,
        stock: 10,
      };
  }

  limpiarBusqueda(): void {
    this.producto = null;
    this.idProducto = 0;
  }

  editarProducto(): void {
    // Implementa la lógica para editar el producto
    console.log('Editar producto:', this.producto);
  }

  eliminarProducto(): void {
    // Implementa la lógica para eliminar el producto
    console.log('Eliminar producto:', this.producto);
  }
}
