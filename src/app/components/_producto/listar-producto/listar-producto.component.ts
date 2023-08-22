import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/models/Producto';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css'],
})
export class ListarProductoComponent implements OnInit {
  lstProductos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.lstProductos = await this.productoService.getProductos();
    } catch (error) {
      console.error('Error al obtener Productos:', error);
    }
  }
}
