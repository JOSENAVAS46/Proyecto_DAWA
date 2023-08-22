import { Component } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Categoria } from 'src/app/models/Categoria';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent {
  lstCategorias: Categoria[] = [];
  productosFiltrados: Producto[] = [];
  terminoBusqueda: string = '';
  categoriaFiltro: string = '';

  constructor(
    private productoService: ProductoService,
    private categoriaService: CategoriaService
  ) {
    this.cargarCategorias();
  }

  async cargarCategorias(): Promise<void> {
    try {
      this.lstCategorias = await this.categoriaService.getCategorias();
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    }
  }
  async filtrarProductos(): Promise<void> {
    try {
      // Filtrar productos por término de búsqueda
      this.productosFiltrados = await this.productoService.filtrarProductos(
        this.terminoBusqueda,
        ''
      );
  
      // Si se seleccionó una categoría, filtrar los productos por esa categoría
      if (this.categoriaFiltro) {
        const categoriaSeleccionada = this.lstCategorias.find(categoria =>
          categoria.nombre.toLowerCase() === this.categoriaFiltro.toLowerCase()
        );
        if (categoriaSeleccionada) {
          this.productosFiltrados = await this.productoService.getProductosPorIdCategoria(categoriaSeleccionada.idCategoria);
        } else {
          this.productosFiltrados = [];
        }
      }
    } catch (error) {
      console.error('Error al filtrar productos:', error);
    }
  }
  
}
