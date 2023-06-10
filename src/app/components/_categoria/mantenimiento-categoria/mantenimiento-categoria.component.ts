import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-mantenimiento-categoria',
  templateUrl: './mantenimiento-categoria.component.html',
  styleUrls: ['./mantenimiento-categoria.component.css'],
})
export class MantenimientoCategoriaComponent {
  categoria: Categoria | null = null;
  idCategoria: number = 0;
  buscarCategoria(): void {
    // Lógica para buscar la categoría en la base de datos
    this.categoria = {
      idCategoria: 1,
      nombre: 'Categoría Ejemplo',
      descripcion: 'Descripción de la categoría',
    };
  }

  limpiarBusqueda(): void {
    this.categoria = null;
  }

  editarCategoria(): void {
    // Lógica para editar la categoría en la base de datos
    console.log('Categoría editada:', this.categoria);
  }

  eliminarCategoria(): void {
    // Lógica para eliminar la categoría de la base de datos
    console.log('Categoría eliminada:', this.categoria);
  }

  crearCategoria(): void {
    // Lógica para crear una nueva categoría en la base de datos
    console.log('Nueva categoría creada:', this.categoria);
  }
}
