import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Producto';
import { Categoria } from 'src/app/models/Categoria';
import { CategoriaService } from 'src/app/services/categoria.service';
import { ProductoService } from 'src/app/services/producto.service'; // Importa tu servicio de productos

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.css'],
})
export class FormProductoComponent implements OnInit {
  lstCategorias: Categoria[] = [];
  producto: Producto = new Producto(0, '', '', this.lstCategorias[0], 0, 0);
  constructor(
    private categoriaService: CategoriaService,
    private productoService: ProductoService // Agrega el servicio de productos
  ) {}
  ngOnInit(): void {
    this.cargarCategorias();
  }

  async cargarCategorias(): Promise<void> {
    try {
      this.lstCategorias = await this.categoriaService.getCategorias();
    } catch (error) {
      console.error('Error al cargar categorías:', error);
    }
  }

  async guardarProducto() {
    try {
      // obtener el objeto categoria que esta selecionado dentro del componente select y colocarlo  en la propiedad de categoria de producto
      this.producto.categoria = this.lstCategorias.find(
        (c) => c.id == this.producto.categoria.id
      )!;
      console.log(this.producto);
      const productoCreado = await this.productoService.crearProducto(
        this.producto
      );
      if (productoCreado) {
        console.log('Producto guardado:', productoCreado);
        // Realiza cualquier acción adicional luego de guardar el producto
      } else {
        console.error('No se pudo guardar el producto.');
      }
    } catch (error) {
      console.error('Error al guardar el producto:', error);
    }
  }
}
