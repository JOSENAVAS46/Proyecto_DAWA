import { Component } from '@angular/core';
import { Categoria } from 'src/app/models/Categoria';

@Component({
  selector: 'app-listar-categoria',
  templateUrl: './listar-categoria.component.html',
  styleUrls: ['./listar-categoria.component.css']
})
export class ListarCategoriaComponent {
  lstCategorias: Categoria[] = [];

  constructor() {
    // Ejemplo de categorías cargadas desde la base de datos
    this.lstCategorias = [
      new Categoria(1, 'Electrónicos', 'Productos electrónicos y dispositivos'),
      new Categoria(2, 'Ropa', 'Ropa y accesorios'),
      new Categoria(3, 'Hogar', 'Productos para el hogar'),
      // Agrega más categorías según tus necesidades
    ];
  }

}
