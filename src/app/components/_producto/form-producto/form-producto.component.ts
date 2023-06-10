import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Categoria } from 'src/app/models/Categoria';
@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css'],
})
export class FormProductoComponent {
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
  ];
  producto: Producto = new Producto(0, '', '', this.lstCategorias[0], 0, 0);

  guardarProducto() {
    // Aquí puedes realizar alguna lógica para guardar el producto
    console.log('Producto guardado:', this.producto);
  }
}
